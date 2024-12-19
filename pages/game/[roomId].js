import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGameContext } from '../gameContext'
import styles from '../../styles.module.css'

const Game = () => {

  const { gameConfig, setGameConfig } = useGameContext();
  const { tokenArray, setTokenArray, roomUrl, gameStart, setGameStart, isAdmin } = gameConfig;
  const [ copied, setCopied ] = useState(false);
  const [ tokenCount, setTokenCount ] = useState(15);
  const [ roomId, setRoomId] = useState(null);
  const [ playerJoined, setPlayerJoined ] = useState(false);
  const [ playerPosition, setPlayerPosition ] = useState(null);

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

  const joinPrivateRoom = async(playerPosition) => {
    console.log("Joining Private Room");

    const data = {
      roomId: roomId,
      userId: '789',
      socketId: 'xyz',
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
        setPlayerJoined(true);
        setPlayerPosition(playerPosition);
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
      numTokens: tokenCount,
      tokenArray: Array(4).fill(tokenCount)
    }));
    console.log("Start Game");
  }

  const shareLink = () => {
    let currentUrl;
    
    if (roomUrl !== null){
      currentUrl = roomUrl;
    } else {
      currentUrl = roomId;
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

  const handleTokenChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setTokenCount(Math.max(0, value));
  };

  return (
    <div id = {styles['game-main-container']}>
        <div id = {styles['game-top-section']} className = {styles['section']}>
          { !playerJoined ? (
            <div id = {styles['player-3']} className={styles['join-button']} onClick = {() => joinPrivateRoom(3)}>Join</div>
          ) : (
            <div id = {styles['player-3']} className={styles['join-button']}>Joined</div>
          )}
          { !playerJoined ? (
            <div id = {styles['player-4']} className={styles['join-button']} onClick = {() => joinPrivateRoom(4)}>Join</div>
          ) : (
            <div id = {styles['player-4']} className={styles['join-button']}>Joined</div>
          )}
          { !playerJoined ? (
            <div id = {styles['player-5']} className={styles['join-button']} onClick = {() => joinPrivateRoom(5)}>Join</div>
          ) : (
            <div id = {styles['player-5']} className={styles['join-button']}>Joined</div>
          )}
        </div>
        <div id = {styles['game-middle-section']} className = {styles['section']}>
          { !playerJoined ? (
            <div id = {styles['player-1']} className={styles['join-button']} onClick = {() => joinPrivateRoom(1)}>Join</div>
          ) : (
            <div id = {styles['player-1']} className={styles['join-button']}>Joined</div>
          )}
          <div id = {styles['share-link-container']}>
            <div id = {styles['share-link']}>Share this link with your friends:</div>
            <div id = {styles['share-link-button']} onClick = {shareLink}>
              {copied ? 'Linked Copied!' : 'Copy Link'}
            </div>
          </div>
          { !playerJoined ? (
            <div id = {styles['player-2']} className={styles['join-button']} onClick = {() => joinPrivateRoom(2)}>Join</div>
          ) : (
            <div id = {styles['player-2']} className={styles['join-button']}>Joined</div>
          )}
        </div>
        <div id = {styles['game-bottom-section']} className = {styles['section']}>
          <div id = {styles['player-0-container']}>
            <div id = {styles['player-0']} className = {styles['player']}>
              <img src="/images/money.png" alt="Logo" className = {styles['money']}/>
              <div id = {styles['player-0-money']} className = {styles['money-text']}>{tokenArray?.[0] ?? 1} Tokens</div>
            </div>
            { isAdmin && (
            <div id = {styles['admin-game-config-text-bubble']}>
              <div id = {styles['text-bubble-text']}>Game Config:</div>
              <div id = {styles['text-bubble-text']}>
                # of tokens per player:
                <div className={styles['token-input-container']}>
                  <button 
                    className={styles['token-button']} 
                    onClick={() => setTokenCount(Math.max(8, tokenCount - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={tokenCount}
                    onChange={handleTokenChange}
                    className={styles['token-input']}
                    min="0"
                  />
                  <button 
                    className={styles['token-button']} 
                    onClick={() => setTokenCount(tokenCount + 1)}
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
