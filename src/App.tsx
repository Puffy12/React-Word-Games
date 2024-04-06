import { useState } from "react"
import words from "./wordList.json";
import "./index.css";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  
  return <div className="max-w-800 flex flex-col gap-8 mx-auto items-center">
            Hi
          </div>
}

export default App
