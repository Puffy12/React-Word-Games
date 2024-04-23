import "./App.css";
import Sidebar from '../SideBar/sidebar';
import Board from './board';
import Keyboard from './keyboard';
import { boardDefault, generateWordSet } from "./words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./GameOver";
import toast, { Toaster } from "react-hot-toast";

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
  disabledLetters: string[];
  setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameOver: { gameOver: boolean; guessedWord: boolean };
  setGameOver: React.Dispatch<
    React.SetStateAction<{ gameOver: boolean; guessedWord: boolean }>
  >;
  almostLetters: string[];
  setAlmostLetters: React.Dispatch<React.SetStateAction<string[]>>;
  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;
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
  disabledLetters: [],
  setDisabledLetters: () => {},
  gameOver: { gameOver: false, guessedWord: false },
  setGameOver: () => {},
  almostLetters: [],
  setAlmostLetters: () => {},
  correctLetters: [],
  setCorrectLetters: () => {},
});

function wordle() {
  const [board, setBoard] = useState(boardDefault); //boardDefault
  const [currAttempt, setcurrAttempt ] = useState({attempt: 0, letterPos: 0});

  const [correctWord, setCorrectWord] = useState("words"); //word of the day
  const [wordSet, setWordSet] = useState<Set<string>>(new Set());

  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [almostLetters, setAlmostLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);


  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });


useEffect(() => {
  generateWordSet().then((words) => {
    setWordSet(words.wordSet as Set<string>);
    setCorrectWord(words.todaysWord || "");
  });
}, []);

  const onEnter = () => {
    if(currAttempt.letterPos !== 5) return; 

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    console.log(currWord.toLowerCase() + " : " + correctWord + " " + wordSet.has(currWord.toLowerCase()) );

    if (wordSet.has(currWord.toLowerCase())) {
      setcurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      toast.error("Word Not Found");
      return 
    }

    if (currWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      toast.success("You Won");
      return;
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
    //setcurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
};

  const onDelete = () => {
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setcurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  };
  
  const onSelectLetter = (keyVal: string) => {
    if(currAttempt.letterPos > 4) return; //cant add more than 5 letters
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  
  };

  return (
    <div>
    <Sidebar />
        <div className='App'>
            <nav>
                <h1>
                    Wordle
                </h1>
                
            </nav>
            <Toaster/>
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
                disabledLetters,
                setDisabledLetters,
                gameOver,
                setGameOver,
                almostLetters,
                setAlmostLetters,
                correctLetters,
                setCorrectLetters,
              }}
            >            
            <div className="game">
              <div className="hidden"> {correctWord}</div>
              <Board />
              {gameOver.gameOver ? <GameOver /> : <Keyboard/>}
            </div>
          </AppContext.Provider>
          
        </div>
      </div>
  )
}

export default wordle