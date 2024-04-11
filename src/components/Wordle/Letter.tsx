import React, { useContext, useEffect } from "react";
import { AppContext } from "./wordle";

import "./App.css"

interface Props {
  letterPos: number;
  attemptVal: number;
}

function Letter({ letterPos, attemptVal }: Props) {
  const { board, setBoard } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div className="letter" >
      {letter}
    </div>
  );
}

export default Letter;
