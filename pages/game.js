import socketIOClient from "socket.io-client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGameContext } from './gameContext'
import styles from '../styles.module.css'

const Game = () => {

  const { gameConfig, setGameConfig } = useGameContext();
  const { tokenArray, roomUrl } = gameConfig;

  const joinPrivateRoom = () => {
    console.log("Join Private Room");
  }

  const shareLink = () => {
    const currentUrl = roomUrl;
    
    // Copy to clipboard
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            alert(currentUrl);
            // Or use a more elegant notification system
        })
        .catch((err) => {
            console.error('Failed to copy link:', err);
    });
  }
  
  return (
    <div id = {styles['game-main-container']}>
        <div id = {styles['game-top-section']} className = {styles['section']}>
          <div id = {styles['player-4']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
          <div id = {styles['player-5']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
          <div id = {styles['player-6']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
        </div>
        <div id = {styles['game-middle-section']} className = {styles['section']}>
          <div id = {styles['player-2']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
          <div id = {styles['share-link-container']}>
            <div id = {styles['share-link']}>Share this link with your friends:</div>
            <div id = {styles['share-link-button']} onClick = {shareLink}>Copy Link</div>
          </div>
          <div id = {styles['player-3']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
        </div>
        <div id = {styles['game-bottom-section']} className = {styles['section']}>
          <div id = 'player-1' className = {styles['player']}>
            <img src="/images/money.png" alt="Logo" className = {styles['money']}/>
            <div id = 'player-1-money' className = {styles['money-text']}>{tokenArray?.[0] ?? 1} Tokens</div>
          </div>
        </div>
      </div>
  );
};

export default Game;
