import React, { useState, useContext } from "react";
import CombinationContext from "../../context/combination-context";
import Symbol from "../atoms/Symbol";
import StatusSymbolGroup from "./StatusSymbolGroup";
import SymbolControls from "./SymbolControls";

const correct = "done";
const atWrongPlace = "cached";
const wrong = "close"; // names coresponding to Google Material Symbols

const SymbolRow = ({ showControls }) => {
  const ctx = useContext(CombinationContext);

  const [guess, setGuess] = useState([]);
  const [allowUndo, setAllowUndo] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [statusSymbols, setStatusSymbols] = useState([]);

  const successCheck = () => {
    const hints = [];
    const frequency = {};

    if (ctx.secretCombination.join("") === guess.join("")) {
      ctx.setWon(true);
      return;
    }

    for (let i = 0; i < ctx.secretCombination.length; i++) {
      if (ctx.secretCombination[i] === guess[i]) {
        hints.push(correct);
      } else {
        if (!frequency[ctx.secretCombination[i]]) {
          frequency[ctx.secretCombination[i]] = 1;
        } else {
          frequency[ctx.secretCombination[i]]++;
        }
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (frequency[guess[i]] > 0 && guess[i] !== ctx.secretCombination[i]) {
        hints.push(atWrongPlace);
        frequency[guess[i]]--;
      }
    }

    while (hints.length < 4) {
      hints.push(wrong);
    }

    setStatusSymbols(hints);
  };

  const attemptGuess = () => {
    successCheck();
    setShowStatus(true);
    setAllowUndo(false);
    ctx.setRound((round) => round + 1);
  };

  const undoGuess = () => {
    setGuess((guess) => guess.slice(0, -1));
  };

  return (
    <>
      <div className="guess-row">
        <div
          className="guess-row_symbols"
          onClick={allowUndo ? undoGuess : null}
        >
          {guess[0] && <Symbol icon={guess[0]} />}
          {guess[1] && <Symbol icon={guess[1]} />}
          {guess[2] && <Symbol icon={guess[2]} />}
          {guess[3] && <Symbol icon={guess[3]} />}
        </div>
        <div className="guess-row_controls">
          {showStatus && <StatusSymbolGroup statusSymbolArr={statusSymbols} />}
        </div>
      </div>

      {showControls && (
        <SymbolControls
          guess={guess}
          attemptGuess={attemptGuess}
          setGuess={setGuess}
        />
      )}
    </>
  );
};

export default SymbolRow;
