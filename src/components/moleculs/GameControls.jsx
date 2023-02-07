import React from "react";
import Button from "../atoms/Button";

const GameControls = ({ quitGame }) => {
  return (
    <div className="game-controls">
      <Button icon="undo" onClick={quitGame} color="secondary" />
      <Button icon="psychology_alt" color="secondary" />
    </div>
  );
};

export default GameControls;
