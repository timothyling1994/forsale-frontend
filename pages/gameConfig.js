import styles from '../styles.module.css'
import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react'; 
import { useRouter } from 'next/navigation';
import { useGameContext } from './GameContext'

const GameConfigPage = () => {

  const router = useRouter();
  const { gameConfig, setGameConfig } = useGameContext();

  //look into createContext and useContext for passing data between pages

  const handleStartGame = () => {
    router.push('/game');
  };
  
  return (
      <div className={styles['game-config-container']}>
        <h1>Game Configuration</h1>
        <div>
          <label htmlFor="numPlayers">Number of Players:</label>
          <select id="numPlayers" defaultValue={3} onChange={(e) => setGameConfig(prev => ({
            ...prev,
            numPlayers: Number(e.target.value)
          }))}>
            <option value={3}>3 Players</option>
            <option value={4}>4 Players</option>
            <option value={5}>5 Players</option>
            <option value={6}>6 Players</option>
          </select>
        </div>
        <div>
          <label htmlFor="numTokens">Starting Tokens:</label>
          <select id="numTokens" defaultValue={15} onChange={(e) => setGameConfig(prev => ({
            ...prev,
            numTokens: Number(e.target.value)
          }))}>
            <option value={12}>12 Tokens</option>
            <option value={15}>15 Tokens</option>
            <option value={18}>18 Tokens</option>
            <option value={20}>20 Tokens</option>
          </select>
        </div>
        <button onClick={handleStartGame}>
          Start Game
        </button>
      </div>
  );

};

export default GameConfigPage;
