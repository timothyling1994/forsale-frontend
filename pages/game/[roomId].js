import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { useGameContext } from '../gameContext'
import { useSocket } from '../socketContext'
import styles from '../../styles.module.css'

const Game = () => {

  const { gameConfig, setGameConfig } = useGameContext();
  const { minLetterPerWord, gameStart, isAdmin } = gameConfig;
  const socket = useSocket();
  const [ copied, setCopied ] = useState(false);
  const [ minLocalLetterPerWord, setMinLocalLetterPerWord ] = useState(4);
  const [ roomId, setRoomId] = useState(null);
  const [ playerJoined, setPlayerJoined ] = useState(false);
  const [ playerPosition, setPlayerPosition ] = useState(null);
  const [ joinedPlayers, setJoinedPlayers ] = useState(() => new Map());
  const [ userId ] = useState(() => {
    // Get or create userId from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('forsale_userId');
      if (stored) return stored;
      const newId = uuidv4();
      localStorage.setItem('forsale_userId', newId);
      return newId;
    }
    return uuidv4();
  });

  const router = useRouter();

  console.log("Component rendering",router.isReady);

  useEffect(() => {
    console.log("Effect running", router.isReady);
    if (router.isReady) {
      setRoomId(router.query.roomId); // Access roomId safely after router is ready
      console.log(roomId); //this won't run because setRoomId is asynchronous
    }
  }, [router.isReady]);
  
  useEffect(() => {
    console.log("RoomId updated",roomId);
  }, [roomId]);

  // Join the Socket.IO room when the page loads
  useEffect(() => {
    if (!roomId || !socket) return;

    socket.emit('joinRoom', { roomId, userId, playerPosition: null });
    console.log("Joined Socket.IO room:", roomId);
  }, [roomId, socket]);

  // Fetch existing players when the page loads via socket
  useEffect(() => {
    if (!roomId || !socket) return;

    // Listen for the server's response (register BEFORE emitting)
    const handleRoomPlayers = (data) => {
      console.log("Received room players:", data);
      if (data.players) {
        const positions = new Map(data.players.map(player => [player.playerPosition, player.socketId]));
        setJoinedPlayers(positions);
      }
    };

    socket.on('playersInRoomResponse', handleRoomPlayers);

    // Ask the server for current players in the room
    socket.emit('getPlayersInRoom', { roomId });

    return () => {
      socket.off('playersInRoomResponse', handleRoomPlayers);
    };
  }, [roomId, socket]);

  // Listen for playerJoined events from the backend
  useEffect(() => {
    if (!socket) return;

    const handlePlayerJoined = (data) => {
      console.log("Player joined event received:", data);
      if (data.playerPosition !== undefined && data.playerPosition !== null) {
        setJoinedPlayers(prev => new Map(prev).set(data.playerPosition, data.socketId));
      }
    };

    const handlePlayerDisconnected = (data) => {
      console.log("Player disconnected event received:", data);
      if (data.playerPosition !== undefined && data.playerPosition !== null) {
        setJoinedPlayers(prev => {
          const updated = new Map(prev);
          updated.delete(data.playerPosition);
          return updated;
        });
      }
    };

    socket.on('playerJoined', handlePlayerJoined);
    socket.on('playerDisconnected', handlePlayerDisconnected);

    return () => {
      socket.off('playerJoined', handlePlayerJoined);
      socket.off('playerDisconnected', handlePlayerDisconnected);
    };
  }, [socket]);

  const joinPrivateRoom = async(playerPosition) => {
    console.log("Joining Private Room");

    if (!socket || !socket.id) {
      console.error('Socket not connected');
      return;
    }

    // Prevent joining if user already joined or position is taken
    if (playerJoined || joinedPlayers.has(playerPosition)) {
      console.log('Cannot join: already joined or position taken');
      return;
    }

    const data = {
      roomId: roomId,
      userId: userId,
      playerPosition: playerPosition
    };

    try {
      let response = await fetch('http://localhost:8080/joinPrivateRoom',{
        //let response = await fetch('https://collab-drums-backend.herokuapp.com/create-public-room',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)

      });
      response = await response.json();
      if(response.roomUpdated)
      {
        console.log("Player joined");
        socket.emit('joinRoom', { roomId, userId, playerPosition });
        setPlayerJoined(true);
        setPlayerPosition(playerPosition);
        // Also update joinedPlayers for this position
        setJoinedPlayers(prev => new Map(prev).set(playerPosition, socket.id));
      }
      else{
        console.log(response.message);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  const startGame = () => {
    setGameConfig(prev => ({
      ...prev,
      minLetterPerWord: minLocalLetterPerWord,
      gameStart: true
    }));
    console.log("Start Game");
  }

  const shareLink = () => {
    let currentUrl;
    
    if (roomId) {
      // Construct URL from roomId
      const ENDPOINT = "http://localhost:3000";
      currentUrl = `${ENDPOINT}/game/${roomId}`;
    } else {
      console.error('No room ID available');
      return;
    }
    
    // Copy to clipboard
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            console.log(currentUrl);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 3000);
            // Or use a more elegant notification system
        })
        .catch((err) => {
            console.error('Failed to copy link:', err);
    });
  }

  const handleMinLetterPerWordChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMinLocalLetterPerWord(Math.max(0, value));
  };

  return (
    <div id = {styles['game-main-container']}>
        <div id = {styles['game-top-section']} className = {styles['section']}>
          { !joinedPlayers.has(3) && !isAdmin && !playerJoined ? (
            <div id = {styles['player-3']} className={styles['join-button']} onClick = {() => joinPrivateRoom(3)}>Join</div>
          ) : (
            <div id = {styles['player-3']} className={styles['join-button']}>{joinedPlayers.has(3) ? joinedPlayers.get(3) : 'Open'}</div>
          )}
          { !joinedPlayers.has(4) && !isAdmin && !playerJoined ? (
            <div id = {styles['player-4']} className={styles['join-button']} onClick = {() => joinPrivateRoom(4)}>Join</div>
          ) : (
            <div id = {styles['player-4']} className={styles['join-button']}>{joinedPlayers.has(4) ? joinedPlayers.get(4) : 'Open'}</div>
          )}
          { !joinedPlayers.has(5) && !isAdmin && !playerJoined ? (
            <div id = {styles['player-5']} className={styles['join-button']} onClick = {() => joinPrivateRoom(5)}>Join</div>
          ) : (
            <div id = {styles['player-5']} className={styles['join-button']}>{joinedPlayers.has(5) ? joinedPlayers.get(5) : 'Open'}</div>
          )}
        </div>
        <div id = {styles['game-middle-section']} className = {styles['section']}>
          { !joinedPlayers.has(1) && !isAdmin && !playerJoined ? (
            <div id = {styles['player-1']} className={styles['join-button']} onClick = {() => joinPrivateRoom(1)}>Join</div>
          ) : (
            <div id = {styles['player-1']} className={styles['join-button']}>{joinedPlayers.has(1) ? joinedPlayers.get(1) : 'Open'}</div>
          )}
          <div id = {styles['share-link-container']}>
            <div id = {styles['share-link']}>Share this link with your friends:</div>
            <div id = {styles['share-link-button']} onClick = {shareLink}>
              {copied ? 'Linked Copied!' : 'Copy Link'}
            </div>
          </div>
          { !joinedPlayers.has(2) && !isAdmin && !playerJoined ? (
            <div id = {styles['player-2']} className={styles['join-button']} onClick = {() => joinPrivateRoom(2)}>Join</div>
          ) : (
            <div id = {styles['player-2']} className={styles['join-button']}>{joinedPlayers.has(2) ? joinedPlayers.get(2) : 'Open'}</div>
          )}
        </div>
        <div id = {styles['game-bottom-section']} className = {styles['section']}>
          <div id = {styles['player-0-container']}>
            <div id = {styles['player-0']} className = {styles['player']}>
              <img src="/images/money.png" alt="Logo" className = {styles['money']}/>
              <div id = {styles['player-0-money']} className = {styles['money-text']}>Admin</div>
            </div>
            { isAdmin && (
            <div id = {styles['admin-game-config-text-bubble']}>
              <div id = {styles['text-bubble-text']}>Game Config:</div>
              <div id = {styles['text-bubble-text']}>
                Minimum # of letters per word:
                <div className={styles['min-letter-per-word-input-container']}>
                  <button 
                    className={styles['num-letters-per-word-button']} 
                    onClick={() => setMinLocalLetterPerWord(Math.max(3, minLocalLetterPerWord - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={minLocalLetterPerWord}
                    onChange={handleMinLetterPerWordChange}
                    className={styles['min-letter-per-word-input']}
                    min="0"
                  />
                  <button 
                    className={styles['num-letters-per-word-button']} 
                    onClick={() => setMinLocalLetterPerWord(minLocalLetterPerWord + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div id = {styles['game-start-button-container']}>
                <div id = {styles['game-start-button']} onClick = {startGame}>Game Start</div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Game;
