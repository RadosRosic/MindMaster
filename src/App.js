import React, { useContext } from "react";
import CombinationContext from "./context/combination-context";
import EndGamePage from "./pages/EndGamePage";

import GameScreen from "./pages/GameScreen";
import MainMenu from "./pages/MainMenu";
import "./styles/main.scss";

function App() {
  const ctx = useContext(CombinationContext);

  return (
    <>
      {!ctx.gameEnded && !ctx.isPlaying && <MainMenu />}
      {!ctx.gameEnded && ctx.isPlaying && <GameScreen />}
      {ctx.gameEnded && <EndGamePage />}
    </>
  );
}

export default App;
