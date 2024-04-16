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
  onEnter: () => void;
  onDelete: () => void;
  onSelectLetter: (keyVal: string) => void;
  correctWord: string;
  setCorrectWord: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
  board: [],
  setBoard: () => {},
  currAttempt: { attempt: 0, letterPos: 0 },
  setcurrAttempt: () => {},
  onEnter: () => {},
  onDelete: () => {},
  onSelectLetter: () => {},
  correctWord: "",
  setCorrectWord: () => {},
});

function wordle() {
  const [board, setBoard] = useState(boardDefault); //boardDefault
  const [currAttempt, setcurrAttempt ] = useState({attempt: 0, letterPos: 0});

  const [correctWord, setCorrectWord] = useState("words"); //word of the day

  const onEnter = () => {
    if(currAttempt.letterPos !== 5) return; 
    setcurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
  }

  const onDelete = () => {
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setcurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }
  
  const onSelectLetter = (keyVal: string) => {
    if(currAttempt.letterPos > 4) return; //cant add more than 5 letters
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  
  }

  return (
    <>
    <Sidebar />
        <div className='App'>
            <nav>
                <h1>
                    Wordle
                </h1>
                
            </nav>
            <AppContext.Provider
              value={{
                board,
                setBoard,
                currAttempt,
                setcurrAttempt,
                onEnter,
                onDelete,
                onSelectLetter,
                correctWord,
                setCorrectWord,
              }}
            >            
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