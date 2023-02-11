import React, { useContext } from "react";
import CombinationContext from "../../context/combination-context";
import ModalContext from "../../context/modal-context";
import Button from "../atoms/Button";

const GameControls = () => {
  const ctx = useContext(CombinationContext);
  const mdlCtx = useContext(ModalContext);
  return (
    <div className="game-controls">
      <Button icon="undo" onClick={ctx.quitGame} color="secondary" />
      <Button
        icon="psychology_alt"
        color="secondary"
        onClick={mdlCtx.showModal}
      />
    </div>
  );
};

export default GameControls;
