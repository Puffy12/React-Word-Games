import React, { useContext, useEffect } from "react";
import { AppContext } from "./wordle";

import "./App.css"

interface Props {
  letterPos: number;
  attemptVal: number;
}

function Letter({ letterPos, attemptVal }: Props) {
  const { board, setBoard, currAttempt, correctWord } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    // correct: green, alomst: yellow, error: red
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      //setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={`${letterState}`}>
      {letter}
    </div>
  );
}

export default Letter;
