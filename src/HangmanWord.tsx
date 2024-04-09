import React from 'react'


type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export default function HangmanWord({ guessedLetters, wordToGuess,reveal = false,
}: HangmanWordProps) {

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
                        guessedLetters.includes(letter) || reveal
                        ? "visible"
                        : "hidden",
                    color:
                        !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}
                >
                    {letter}
                </span>
            </span>
        ))}
    </div>
  )
}
