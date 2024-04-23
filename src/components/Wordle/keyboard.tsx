import { useCallback, useEffect, useContext } from "react";
import { AppContext } from "./wordle";
import Key from './key';


function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {currAttempt, onSelectLetter, onEnter, onDelete, disabledLetters, almostLetters, correctLetters} = useContext(AppContext); 

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
    <>
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key key={`line1-${key}`} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={false} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}  />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key key={`line2-${key}`} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={false} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}  />;
        })}
      </div>
      <div className="line3">
        <Key key={`line3-enter`} keyVal={"ENTER"} bigKey disabled={true} almost={false} correct={false}/>
        {keys3.map((key) => {
          return <Key key={`line3-${key}`} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={false} almost={almostLetters.includes(key)} correct={correctLetters.includes(key)}  />;
        })}
        <Key key={`line3-delete`} keyVal={"DELETE"} bigKey disabled={false} almost={false} correct={false}/>
      </div>
    </div>

    </>
    );
}

export default Keyboard;