import socketIOClient from "socket.io-client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGameContext } from './gameContext'
import styles from '../styles.module.css'

const Game = () => {

  const { gameConfig } = useGameContext();
  //const { gameReady, setGameReady} = useState(false);
  const { numPlayers, numTokens } = gameConfig; //default is 3 players and 15 tokens


  return (
    <div id = {styles['game-main-container']}>
        <div id = {styles['game-top-section']} className = {styles['section']}>
          <div id = {styles['player-4']} className={styles['player']}>Player 4</div>
          <div id = {styles['player-5']} className={styles['player']}>Player 5</div>
          <div id = {styles['player-6']} className={styles['player']}>Player 6</div>
        </div>
        <div id = {styles['game-middle-section']} className = {styles['section']}>
          <div id = {styles['player-2']} className={styles['player']}>Player 2</div>
          <div id = {styles['player-3']} className={styles['player']}>Player 3</div>
        </div>
        <div id = {styles['game-bottom-section']} className = {styles['section']}>
          <div id = {styles['player-1']} className={styles['player']}>Player 1</div>
        </div>
      </div>
  );

};

export default Game;
