import "./App.css";
import Sidebar from '../SideBar/sidebar';
import Board from './board';
import Keyboard from './keyboard';
import { boardDefault, generateWordSet } from "./words";
import React, { useState, createContext, useEffect } from "react";


interface Attempt {
  attempt: number;
  letterPos: number;
}

interface AppContextType {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currAttempt: Attempt;
  setcurrAttempt: React.Dispatch<React.SetStateAction<Attempt>>;
}

export const AppContext = createContext<AppContextType>({
  board: boardDefault,
  setBoard: () => {},
  currAttempt: { attempt: 0, letterPos: 0 },
  setcurrAttempt: () => {},
});
function wordle() {
  const [board, setBoard] = useState(boardDefault); //boardDefault
  const [currAttempt, setcurrAttempt ] = useState({attempt: 0, letterPos: 0});

  return (
    <>
    <Sidebar />
        <div className='App'>
            <nav>
                <h1>
                    Wordle
                </h1>
                
            </nav>
          <AppContext.Provider value={{ board, setBoard , currAttempt, setcurrAttempt}}>
            <div className="game">
              <Board />
              <Keyboard />
            </div>
          </AppContext.Provider>
          
            
        </div>
      </>
  )
}

export default wordle