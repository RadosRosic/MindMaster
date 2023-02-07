import React, { useContext } from "react";
import CombinationContext from "../../context/combination-context";

import Symbol from "../atoms/Symbol";

const EndGameSymbols = () => {
  const ctx = useContext(CombinationContext);
  const correctCombination = ctx.secretCombination.map((symbol, i) => (
    <Symbol icon={symbol} key={`${symbol}${i}`} />
  ));
  return (
    <div className="end-game_solution">
      <h2>Correct Combination</h2>
      <div className="end-game_solution-symbols">{correctCombination}</div>
    </div>
  );
};

export default EndGameSymbols;
