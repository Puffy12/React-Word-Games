import "./App.css";
import Sidebar from '../SideBar/sidebar';
import Board from './board';
import Keyboard from './keyboard';
import { boardDefault, generateWordSet } from "./words";
import React, { useState, createContext, useEffect } from "react";

interface AppContextType {
    board: string[][]; // Adjust the type according to your actual board type
    setBoard: React.Dispatch<React.SetStateAction<string[][]>>;

  }

export const AppContext = createContext<AppContextType>({} as AppContextType);

function wordle() {
    const [board, setBoard] = useState(boardDefault); //boardDefault
 

  return (
    <>
    <Sidebar />
        <div className='App'>
            <nav>
                <h1>
                    Wordle
                </h1>
                
            </nav>
          <AppContext.Provider value={{ board, setBoard }}>
            <Board />
            <Keyboard />
          </AppContext.Provider>
          
            
        </div>
      </>
  )
}

export default wordle