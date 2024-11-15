import socketIOClient from "socket.io-client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGameContext } from './gameContext'
import styles from '../styles.module.css'

const Game = () => {

  const { gameConfig, setGameConfig } = useGameContext();
  const { tokenArray, setTokenArray, roomUrl, gameStart, setGameStart, isAdmin } = gameConfig;
  const [ copied, setCopied ] = useState(false);
  const [tokenCount, setTokenCount] = useState(15);

  const joinPrivateRoom = () => {
    console.log("Join Private Room");
  }

  const startGame = () => {
    setGameConfig(prev => ({
      ...prev,
      numTokens: tokenCount,
      tokenArray: Array(4).fill(tokenCount)
    }));
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

  const handleTokenChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setTokenCount(Math.max(0, value));
  };

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
            { isAdmin && (
            <div id = {styles['admin-game-config-text-bubble']}>
              <div id = {styles['text-bubble-text']}>Game Config:</div>
              <div id = {styles['text-bubble-text']}>
                # of tokens per player:
                <div className={styles['token-input-container']}>
                  <button 
                    className={styles['token-button']} 
                    onClick={() => setTokenCount(Math.max(8, tokenCount - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={tokenCount}
                    onChange={handleTokenChange}
                    className={styles['token-input']}
                    min="0"
                  />
                  <button 
                    className={styles['token-button']} 
                    onClick={() => setTokenCount(tokenCount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div id = {styles['game-start-button-container']}>
                <div id = {styles['game-start-button']} onClick = {startGame}>Game Start</div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Game;
