import React from 'react'


type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export default function HangmanWord({ guessedLetters, wordToGuess}: HangmanWordProps) {

    return (
    <div className="flex text-6xl uppercase font-mono"
    style={{ 
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        }}>
        {wordToGuess.split("").map((letter, index) => (
            <span key={index} style={{ borderBottom: ".1em solid black" }}>
                <span
                    style={{
                    visibility:
                        guessedLetters.includes(letter) 
                        ? "visible"
                        : "hidden",
                    color:
                        !guessedLetters.includes(letter) ? "red" : "black",
                    }}
                >
                    {letter}
                </span>
            </span>
        ))}
    </div>
  )
}
