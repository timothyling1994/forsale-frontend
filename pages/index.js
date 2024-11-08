import socketIOClient from "socket.io-client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ENDPOINT = "http://localhost:8080"; //set environment variable here

const Home = () => {

  const router = useRouter();

  const createPrivateRoom = async () => {
    console.log("reach");

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
      console.log(response);
      if(response.createdRoom)
      {
        router.push('/gameConfig');
      }
    }
    catch(e){
      console.error(e);
    }
  };


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



export default Home;
