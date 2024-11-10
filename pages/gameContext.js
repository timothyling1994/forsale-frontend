import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    
  const [gameConfig, setGameConfig] = useState({
    numPlayers: 6,
    numTokens: 15,
    tokenArray: [0,0,0,0,0,0],
    gameStart: false
  });


  return (
    <GameContext.Provider value={{
        gameConfig,
        setGameConfig    
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
      throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};