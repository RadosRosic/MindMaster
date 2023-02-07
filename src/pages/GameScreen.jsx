import React, { useContext } from "react";
import CombinationContext from "../context/combination-context";

import GameControls from "../components/moleculs/GameControls";
import SymbolRow from "../components/moleculs/SymbolRow";

const GameScreen = () => {
  const ctx = useContext(CombinationContext);

  return (
    <div className="game-screen">
      <GameControls quitGame={ctx.quitGame} />
      <div className="game-screen_symbol-rows">
        {ctx.round >= 1 && <SymbolRow showControls={ctx.round === 1} />}
        {ctx.round >= 2 && <SymbolRow showControls={ctx.round === 2} />}
        {ctx.round >= 3 && <SymbolRow showControls={ctx.round === 3} />}
        {ctx.round >= 4 && <SymbolRow showControls={ctx.round === 4} />}
        {ctx.round >= 5 && <SymbolRow showControls={ctx.round === 5} />}
        {ctx.round >= 6 && <SymbolRow showControls={ctx.round >= 6} />}
      </div>
    </div>
  );
};

export default GameScreen;
