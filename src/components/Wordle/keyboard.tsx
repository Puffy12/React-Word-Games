import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "./wordle";
import Key from './key';


function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {currAttempt, onSelectLetter, onEnter, onDelete} = useContext(AppContext); 

  const handleKeyboard = useCallback((event: { key: string; }) => {
      //if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );



  useEffect(() => {
    document.addEventListener("keydown",handleKeyboard);

    return () => {
      document.removeEventListener("keydown",handleKeyboard);
    }
  }, [handleKeyboard])

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <Key key={key} keyVal={key} bigKey={false} />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key key={key} keyVal={key} bigKey={false} />
        ))}
      </div>
      <div className="line3">
        <Key key="ENTER" keyVal={"ENTER"} bigKey />
        {keys3.map((key) => (
          <Key key={key} keyVal={key} bigKey={false} />
        ))}
        <Key key="DELETE" keyVal={"DELETE"} bigKey />
      </div>
    </div>
    );
}

export default Keyboard;