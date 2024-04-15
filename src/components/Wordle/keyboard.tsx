import React from 'react'
import { AppContext } from "./wordle";
import Key from './key';


function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];


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

export default Keyboard