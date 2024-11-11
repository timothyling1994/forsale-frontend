import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGameContext } from './gameContext'
import styles from '../styles.module.css'

const Game = () => {

  const { gameConfig, setGameConfig } = useGameContext();
  const { tokenArray, setTokenArray, roomUrl, gameStart, setGameStart } = gameConfig;
  const [ copied, setCopied ] = useState(false);

  const joinPrivateRoom = () => {
    console.log("Join Private Room");
  }

  const startGame = () => {
    console.log("Start Game");
  }

  const shareLink = () => {
    const currentUrl = roomUrl;
    
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
            <div id = {styles['share-link-button']} onClick = {shareLink}>
              {copied ? 'Linked Copied!' : 'Copy Link'}
            </div>
          </div>
          <div id = {styles['player-3']} className={styles['join-button']} onClick = {joinPrivateRoom}>Join</div>
        </div>
        <div id = {styles['game-bottom-section']} className = {styles['section']}>
          <div id = {styles['player-1-container']}>
            <div id = {styles['player-1']} className = {styles['player']}>
              <img src="/images/money.png" alt="Logo" className = {styles['money']}/>
              <div id = {styles['player-1-money']} className = {styles['money-text']}>{tokenArray?.[0] ?? 1} Tokens</div>
            </div>
            <div className = {styles['text-bubble']}>
              <div id = {styles['text-bubble-text']}>Admin Game Config</div>
              <div id = {styles['text-bubble-text']}># of tokens per player:</div>
              <div id = {styles['game-start-button-container']}>
                <div id = {styles['game-start-button']} onClick = {startGame}>Game Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Game;
