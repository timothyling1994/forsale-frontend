import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    
  const [gameConfig, setGameConfig] = useState({
    numPlayers: 3,
    numTokens: 15
  });

  return (
    <GameContext.Provider value={{ gameConfig, setGameConfig }}>
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