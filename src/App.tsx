import { useCallback, useEffect, useState } from "react"
import { useSignal, useComputed, useSignalEffect, computed } from "@preact/signals-react";
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
  let guessedLetters = useSignal<string[]>([])

  const incorrectLetters = guessedLetters.value.filter(
    letter => !wordToGuess.value.includes(letter)
  );
  
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.value.split("")
    .every((letter: string) => guessedLetters.value.includes(letter))

    const addGuessedLetter = useCallback(
      (letter: string) => {
        if (
          guessedLetters.value.includes(letter) ||
          isLoser||
          isWinner
        )
          return;
    
        const temp = computed(() => guessedLetters.value + letter);
        
      },
      [, isWinner, isLoser]
    );
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters.value])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      //setGuessedLetters([])
      //setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className="max-w-800 flex flex-col gap-8 mx-auto items-center">
      {wordToGuess.value}
      <div className="text-2xl text-center">
        Lose Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters.value} wordToGuess={wordToGuess.value} />
      <div className="self-stretch">
        <HangmanKeyboard />
      </div>
    </div>
  );
}

export default App
