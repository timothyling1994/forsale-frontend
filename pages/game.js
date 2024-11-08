import socketIOClient from "socket.io-client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Game = () => {

  const { gameConfig } = useGameContext();
  const { numPlayers, numTokens } = gameConfig;

  return (
    <div>
      Number of Players: {numPlayers}
      Number of Tokens: {numTokens}
    </div>
  );

};



export default Game;
