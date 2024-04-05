import { useState } from 'react'
import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

const [wordToGuess, setWordToGuess] = useState(getWord)
const [guessedLetters, setGuessedLetters] = useState<string[]>([])


function App() {
  return (
    <h1>HETTETsdfdsfET</h1>
    
  )
}

export default App
