import React, { useContext } from "react";
import CombinationContext from "../context/combination-context";
import Button from "../components/atoms/Button";
import EndGameSymbols from "../components/moleculs/EndGameSymbols";
import EndGameText from "../components/moleculs/EndGameText";

const EndGamePage = () => {
  const ctx = useContext(CombinationContext);

  const result = ctx.won ? "won" : "lost";

  return (
    <>
      <div className={`end-game end-game-bg-${result}`}>
        <EndGameText />
        <div>
          <EndGameSymbols />
          <div className="end-game_button-wrapper">
            <Button
              color="primary"
              text="Try Again"
              shape="rectangle"
              icon="refresh"
              onClick={ctx.playGame}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EndGamePage;
