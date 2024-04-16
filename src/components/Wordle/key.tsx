import React, { useContext } from 'react'
import { AppContext } from "./wordle";


interface KeyProps {
    keyVal: string;
    bigKey: boolean;
}

const Key: React.FC<KeyProps> = ({ keyVal, bigKey }) => {
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
        id={bigKey ? "big" : undefined} // Only set id when bigKey is true
        onClick={selectLetter}
    >
    {keyVal}
  </div>
  )
}

export default Key;