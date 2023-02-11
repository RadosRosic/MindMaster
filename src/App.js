import React, { useContext } from "react";
import CombinationContext from "./context/combination-context";
import ModalContext from "./context/modal-context";
import EndGamePage from "./pages/EndGamePage";

import GameScreen from "./pages/GameScreen";
import MainMenu from "./pages/MainMenu";
import Modal from "./components/moleculs/Modal";
import "./styles/main.scss";

function App() {
  const ctx = useContext(CombinationContext);
  const mdlCtx = useContext(ModalContext);

  return (
    <>
      {mdlCtx.isModalShowing && <Modal />}
      {!ctx.gameEnded && !ctx.isPlaying && <MainMenu />}
      {!ctx.gameEnded && ctx.isPlaying && <GameScreen />}
      {ctx.gameEnded && <EndGamePage />}
    </>
  );
}

export default App;
