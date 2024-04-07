import { useState } from "react"
import { useSignal, useComputed, useSignalEffect } from "@preact/signals-react";
import words from "./wordList.json";
import "./index.css";
import { HangmanDrawing } from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import HangmanKeyboard from "./HangmanKeyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}



function App() {
  const wordToGuess= useSignal(getWord())
  const guessedLetters = useSignal<string[]>([])

  const incorrectLetters = guessedLetters.value.filter(
    letter => !wordToGuess.value.includes(letter)
  );
  
  return (
    <div className="max-w-800 flex flex-col gap-8 mx-auto items-center">
      {wordToGuess.value}
      <div className="text-2xl text-center">
        Lose Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div className="self-stretch">
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App
