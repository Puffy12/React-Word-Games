import { useCallback, useEffect, useState } from "react"
//import { useSignal, useComputed, useSignalEffect, computed } from "@preact/signals-react";
import words from "./wordList.json";
import "../../index.css";
import { HangmanDrawing } from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import { Keyboard }from "./components/HangmanKeyboard";
import Sidebar from "../SideBar/sidebar";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}



function Hangman() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6 //6 body parts
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

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
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div ><Sidebar />
    <div className="max-w-800 min-h-screen max-w-800 flex flex-col gap-8 mx-auto items-center bg-gray-500">
      <h1 className="hidden">{wordToGuess}</h1>
      
      <div className="text-2xl text-center">
        {isWinner && "Winner! - Refresh to try again or Press Enter ⭐"}
        {isLoser && "Nice Try - Refresh to try again or Press Enter ⭐"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className="self-stretch px-10 ">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter} />
      </div>
    </div>

    </div>
  );
}

export default Hangman
