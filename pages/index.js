import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles.module.css';
import { useGameContext } from './gameContext';
import { useSocket } from './socketContext';

const ENDPOINT = "http://localhost:3000"; //set environment variable here

const Home = () => {

  const router = useRouter();
  const { gameConfig, setGameConfig } = useGameContext();
  const socket = useSocket();
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

  useEffect(() => {
    if (!socket) return;

    socket.emit('socket-connecting', 1000);

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    return () => {
      socket.off('user-disconnected');
    };
  }, [socket]);


  const createPublicRoom = () => {
    console.log("Create Public Room");
  };

  const joinPublicRoom = () => {
    console.log("Join Public Room");
  };

  const joinPrivateRoom = () => {
    console.log("Join Private Room");
  }; 

  const createPrivateRoom = async () => {
    if (!socket || !socket.id) {
      console.error('Socket not connected');
      return;
    }
  
    const data = {
      userId: userId,
      socketId: socket.id,
      isAdmin: true
    };

    try {
      let response = await fetch('http://localhost:8080/createRoom',{
        //let response = await fetch('https://collab-drums-backend.herokuapp.com/create-public-room',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)

      });
      response = await response.json();
      if(response.createdRoom)
      {
        setGameConfig(prev => ({
          ...prev,
          roomId: response.roomId,
          roomUrl: ENDPOINT + '/game/' + response.roomId,
          isAdmin: true
        }));
        router.push(`/game/${response.roomId}`);
      }
    }
    catch(e){
      console.error(e);
    }
  };


  return (
    <div id = {styles['home-main-container']}>
      <div id = {styles['home-top-section']}>
        <div id = {styles['home-title']}>UP FOR SALE</div>
      </div>
      <div id = {styles['home-button-container']}>
        <button className = {styles['home-buttons']} onClick={createPrivateRoom}>Create Private Room</button>
        <button className = {styles['home-buttons']} onClick={createPublicRoom}>Create Public Room</button>
        <button className = {styles['home-buttons']} onClick={joinPublicRoom}>Join Public Room</button>
      </div>
    </div>
    
  );
};



export default Home;
