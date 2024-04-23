import { useContext, useEffect } from "react";
import { AppContext } from "./wordle";

import "./App.css"

interface Props {
  letterPos: number;
  attemptVal: number;
}

function Letter({ letterPos, attemptVal }: Props) {
  const { board, currAttempt, correctWord, setDisabledLetters, setAlmostLetters, setCorrectLetters } = useContext(AppContext);
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
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  useEffect(() => {
    if (letter !== "" && almost) {
      console.log(letter);
      setAlmostLetters((prev) => [...prev, letter]);
    }
  }, [letter, correct, almost, setAlmostLetters]);

  useEffect(() => {
    if (letter !== "" && correct) {
      console.log(letter);
      setCorrectLetters((prev) => [...prev, letter]);
      // Remove the letter from the almost letters
      if (almost) {
        setAlmostLetters((prev) => prev.filter(almostLetter => almostLetter !== letter));
      }
    }
  }, [letter, correct, almost, setCorrectLetters, setAlmostLetters]);

  return (
    <div className="letter" id={`${letterState}`}>
      {letter}
    </div>
  );
}

export default Letter;
