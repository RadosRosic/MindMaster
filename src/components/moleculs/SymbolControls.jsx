import React from "react";
import Button from "../atoms/Button";

const SymbolControls = ({ guess, setGuess }) => {
  const selectSymbol = (symbol) => {
    setGuess((guessArr) => [...guessArr, symbol]);
  };

  return (
    <div className="symbol-controls">
      <Button
        disabled={guess.length === 4}
        icon="security"
        color="cool"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
      <Button
        disabled={guess.length === 4}
        icon="castle"
        color="cool"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
      <Button
        disabled={guess.length === 4}
        icon="swords"
        color="warm"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
      <Button
        disabled={guess.length === 4}
        icon="flag"
        color="warm"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
      <Button
        disabled={guess.length === 4}
        icon="sports_bar"
        color="warmer"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
      <Button
        disabled={guess.length === 4}
        icon="menu_book"
        color="warmer"
        onClick={(event) => selectSymbol(event.currentTarget.value)}
      />
    </div>
  );
};

export default SymbolControls;
