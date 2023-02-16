import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../../context/modal-context";
import Button from "../atoms/Button";
import Symbol from "../atoms/Symbol";
import StatusSymbol from "../atoms/StatusSymbol";
import StatusSymbolGroup from "./StatusSymbolGroup";

const exampleStatusSymbols = ["done", "done", "cached", "close"];

const Modal = () => {
  const mdlCtx = useContext(ModalContext);
  const [modalPage, setModalPage] = useState(1);

  const modalShowing = mdlCtx.isModalShowingClass ? "modal-show" : "";
  const modalBg = mdlCtx.isModalShowingClass ? "modal-bg-transparency" : "";

  const nextPage = () => {
    setModalPage((modalPage) => modalPage + 1);
  };

  const prevPage = () => {
    setModalPage((modalPage) => modalPage - 1);
  };

  useEffect(() => {
    const hideModalOnKeyPress = (event) => {
      if (event.key === "Escape") {
        mdlCtx.hideModal();
      }
    };

    document.addEventListener("keydown", hideModalOnKeyPress);
    return () => document.removeEventListener("keydown", hideModalOnKeyPress);
  }, [mdlCtx]);

  const modalPage1 = (
    <>
      <p>Goal of the game is to guess the secret combination</p>
      <p>After each attempt hints will be displayed</p>
      <ul className="hints-description">
        <li>
          <StatusSymbol icon="done" />
          Correct symbol at the correct place
        </li>
        <li>
          <StatusSymbol icon="cached" /> Correct symbol at the wrong place
        </li>
        <li>
          <StatusSymbol icon="close" /> Symbol is not in the combination
        </li>
      </ul>
      <p>The order of hints and secret symbols are not related</p>
    </>
  );

  const modalPage2 = (
    <>
      <p>Let's see an example guess</p>
      <div className="example-combination">
        <span>
          <Symbol icon="security" />
          <Symbol icon="security" />
          <Symbol icon="swords" />
          <Symbol icon="sports_bar" />
        </span>
        <StatusSymbolGroup exampleStatusSymbols={exampleStatusSymbols} />
      </div>
      <p>
        This means that two symbols are in the secret combination and are at a
        right place.
      </p>
      <p>One symbol is in the secret combination but not at the right place</p>
      <p>And one symbol is not in the secret combination</p>
    </>
  );

  const modalPage3 = (
    <>
      <p>Honestly just play the game, you will get in no time</p>
      <p>Game by Rados Rosic. Visual design by Dusan Vuckovic</p>
      <p>Inspired by Mordecai Meirowitz Master Mind game</p>
      <p>No copyright infringement intended</p>
    </>
  );

  return (
    <div className={`modal ${modalBg}`} onClick={mdlCtx.hideModal}>
      <div
        className={`modal-content ${modalShowing}`}
        onClick={(event) => event.stopPropagation()}
      >
        {modalPage === 1 && modalPage1}
        {modalPage === 2 && modalPage2}
        {modalPage === 3 && modalPage3}
        <div className="modal-buttons">
          <Button
            icon="chevron_left"
            disabled={modalPage === 1}
            onClick={prevPage}
          />
          <Button icon="hand_bones" onClick={mdlCtx.hideModal} />
          <Button
            icon="chevron_right"
            disabled={modalPage === 3}
            onClick={nextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
