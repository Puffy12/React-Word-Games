import React, { useContext } from 'react'
import { AppContext } from "./wordle";


interface KeyProps {
    keyVal: string;
    bigKey: boolean;
}

const Key: React.FC<KeyProps> = ({ keyVal, bigKey }) => {
  const { board, setBoard, currAttempt, setcurrAttempt } = useContext(AppContext); 

  const selectLetter = () => {
    if(currAttempt.letterPos > 4) return; //cant add more than 5 letters
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  return (
    <div className="key" 
        id={bigKey ? "big" : undefined} // Only set id when bigKey is true
        onClick={selectLetter}
    >
    {keyVal}
  </div>
  )
}

export default Key;