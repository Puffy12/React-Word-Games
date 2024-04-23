import React, { useContext } from 'react'
import { AppContext } from "./wordle";


interface KeyProps {
    keyVal: string;
    bigKey: boolean;
    disabled: boolean;
    almost: boolean;
    correct: boolean;
}

const Key: React.FC<KeyProps> = ({ keyVal, bigKey, disabled, almost, correct }) => {
  const {onSelectLetter, onEnter, onDelete} = useContext(AppContext); 

  const selectLetter = () => {
    if(keyVal === "ENTER"){
      onEnter();
    }else if(keyVal === "DELETE"){
      onDelete();

    }else{
      onSelectLetter(keyVal);
    }
  }

  return (
    <div className="key" 
    id={bigKey ? "big" : (disabled ? "disabled" : (correct ? "correct" : (almost ? "almost" : "")))}
    onClick={selectLetter}
    >
    {keyVal}
  </div>
  )
}

export default Key;