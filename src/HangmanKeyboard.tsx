import React from 'react'
import styles from "./Keyboard.module.css"

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");


export default function HangmanKeyboard() {
  return (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem", 
        }}>
        {KEYS.map(key => (
        <button key={key} className={`${styles.btn}`}>
            {key}
        </button>
        ))}
        
    </div>
  )
}
