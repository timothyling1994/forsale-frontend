import socketIOClient from "socket.io-client";
import { useEffect } from 'react';

const ENDPOINT = "http://localhost:8080"; //set environment variable here

const Home = () => {

  return (
    <div>
      <button onClick={createPrivateRoom}>Create Private Room</button>
    </div>
  );

  useEffect(() => {
    
    const socket = socketIOClient(ENDPOINT);

    setCurrentSocket(socket);
  
    socket.emit('joining-room', 1000);

    socket.on('user-connected', () => {
      console.log('a user connected');
      setTestMsg("user-connected");
    });

    socket.on('user-disconnected', () => {
      console.log('user disconnected');
    });


    //setRoomId(props.roomId);

    return () => {
      socket.disconnect(); //this is what happens when component unmounts
    };
    
  },[]); //eventually need props.roomId once backend is set up
};

const createPrivateRoom = async () => {
    console.log("reach");
    try {
      let response = await fetch('http://localhost:8080/createRoom',{
        //let response = await fetch('https://collab-drums-backend.herokuapp.com/create-public-room',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }

      });
      response = await response.json();
      console.log(response);
    }
    catch(e){
      console.error(e);
    }
};


export default Home;
