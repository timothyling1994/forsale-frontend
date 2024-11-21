import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.css';
import { useGameContext } from './gameContext';
import { useSocket } from './socketContext';

const ENDPOINT = "http://localhost:8080"; //set environment variable here

const Home = () => {

  const router = useRouter();
  const { gameConfig, setGameConfig } = useGameContext();
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.emit('socket-connecting', 1000);

    socket.on('user-disconnected', () => {
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
  
    const data = {
      userId: '123',
      socketId: 'abc'
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
