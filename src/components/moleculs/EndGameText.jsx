import React, { useContext } from "react";
import CombinationContext from "../../context/combination-context";

const EndGameText = () => {
  const ctx = useContext(CombinationContext);
  const result = ctx.won ? "won" : "lost";
  const resultTitle = ctx.won ? "Win!" : "Lose";
  const endGameMessage = ctx.won
    ? '"Success is not final; failure is not <br/> fatal: it is the courage to continue  <br/> that counts." - Winston Churchill'
    : "Despite your hard work, your <br/> intelligence has not been  <br/> advantageous.";

  return (
    <div className={`end-game-text end-game-${result}`}>
      <div>
        <h1>
          <span>You</span> <span>{resultTitle}</span>
        </h1>
        <h2 dangerouslySetInnerHTML={{ __html: endGameMessage }} />
      </div>
    </div>
  );
};

export default EndGameText;
