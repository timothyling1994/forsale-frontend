import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

const Home = () => {

  return (
    <div>
      <button onClick={createPrivateRoom}>Create Private Room</button>
    </div>
  );
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

useEffect(() => {
    
    const socket = socketIOClient(ENDPOINT);

    setCurrentSocket(socket);
  
    socket.emit('joining-room', props.roomId);

    socket.on('user-connected', () => {
      console.log('a user connected');
      setTestMsg("user-connected");
    });

    socket.on('user-disconnected', () => {
      console.log('user disconnected');
    });

    socket.on('bpm-updated', (newBPM) => {
      setBPM(newBPM);
    });

  
    setRoomId(props.roomId);

    return () => {
      socket.disconnect();
    };
    
  },[props.roomId]);

export default Home;
