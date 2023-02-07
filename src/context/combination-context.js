import React, { useState } from "react";

const CombinationContext = React.createContext({
  won: false,
  round: 1,
  secretCombination: [],
  playGame: () => {},
  quitGame: () => {},
  setRound: () => {},
  setWon: () => {},
});

export const CombinationContextProvider = (props) => {
  const icons = [
    "security",
    "castle",
    "swords",
    "flag",
    "sports_bar",
    "menu_book",
  ];

  const [won, setWon] = useState(false);
  const [round, setRound] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secretCombination, setSecretCombination] = useState([]);

  const gameEnded = won || round === 7;

  const generateRandomNumber = () => Math.trunc(Math.random() * 6);

  const generateSecretCombination = () => {
    let first = generateRandomNumber();
    let second = generateRandomNumber();
    let third = generateRandomNumber();
    let fourth = generateRandomNumber();

    setSecretCombination([
      icons[first],
      icons[second],
      icons[third],
      icons[fourth],
    ]);
  };

  const playGame = () => {
    setIsPlaying(true);
    setRound(1);
    setWon(false);
    generateSecretCombination();
  };

  const quitGame = () => {
    setIsPlaying(false);
    setSecretCombination([]);
    setRound(1);
    setWon(false);
  };

  return (
    <CombinationContext.Provider
      value={{
        isPlaying,
        secretCombination,
        playGame,
        quitGame,
        won,
        setWon,
        round,
        setRound,
        gameEnded,
      }}
    >
      {props.children}
    </CombinationContext.Provider>
  );
};

export default CombinationContext;
