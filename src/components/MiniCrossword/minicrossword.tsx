import { FaArrowCircleDown } from 'react-icons/fa'
import Sidebar from '../SideBar/sidebar'
import { CrosswordGrid, CrosswordImperative, CrosswordProvider, DirectionClues } from '@jaredreisinger/react-crossword';
import { Command, Commands } from '../Crossword/crossword-data';
import { useCallback, useEffect, useRef, useState } from 'react';
//import { data } from './miniData';

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export const data = {
  across: {
    1: { clue: 'Hybrid striped animal whose dad is a 1-Down, and whose mom starts with "h"   ', answer: 'ZORSE', row: 0, col: 0 },
    6: { clue: 'Put into law   ', answer: 'ENACT', row: 1, col: 0 },
    7: { clue: 'Software releases that might still be buggy  ', answer: 'BETAS', row: 2, col: 0 },
    8: { clue: '"Save it for a ___ day"   ', answer: 'RAINY', row: 3, col: 0 },
    9: { clue: 'So much   ', answer: 'ALOT', row: 4, col: 0 },
  },
  down: {
    1: { clue: 'Black-and-white safari animal ', answer: 'ZEBRA', row: 0, col: 0 },
    2: { clue: 'Shaqs lastname   ', answer: 'ONEAL', row: 0, col: 1 },
    3: { clue: 'Numerical relationship often written with a colon   ', answer: 'RATIO', row: 0, col: 2 },
    4: { clue: 'Barely enough, quantity-wise  ', answer: 'SCANT', row: 0, col: 3 },
    5: { clue: 'Online marketplace for crafters   ', answer: 'ETSY', row: 0, col: 4 },
  },
};

function MiniCrossword() {
  const crossword = useRef<CrosswordImperative>(null);
  const messagesRef = useRef<HTMLPreElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const focus = useCallback<React.MouseEventHandler>(() => {
    crossword.current?.focus();
  }, []);

  const fillOneCell = useCallback<React.MouseEventHandler>(() => {
    crossword.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswers = useCallback<React.MouseEventHandler>(() => {
    crossword.current?.fillAllAnswers();
  }, []);

  const reset = useCallback<React.MouseEventHandler>(() => {
    crossword.current?.reset();
  }, []);

  const clearMessages = useCallback<React.MouseEventHandler>(() => {
    setMessages([]);
  }, []);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }
    const { scrollHeight } = messagesRef.current;
    messagesRef.current.scrollTo(0, scrollHeight);
  }, [messages]);
  
  return (
    <div className='bg-stone-600 text-white'>
      <Sidebar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-600">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-8">
            Welcome to the Mini Crossword Game
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            This game is currently in development.
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            Michael Mehrdadi ❤️
          </p>
        </div>
        <a href={'/'} className='mt-10'>
          <button className="justify-center gap-2 h-12 w-32 bg-blue-400 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-500 active:scale-105">
            Home
          </button>
        </a>

        <div className="text-blue-400 w-14 h-14 text-5xl cursor-pointer z-10 mt-20" onClick={() => scrollToElement("minicrossword")}>
          <FaArrowCircleDown />
        </div>


        <div style={{ width: '40em', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em' }}>

        
          <CrosswordProvider data={data} >
            <div style={{ marginBottom: '1em' }} id='minicrossword'>
              <Commands>
                <Command onClick={focus}>Focus</Command>
                <Command onClick={fillOneCell}>Fill the first letter of 2-down</Command>
                <Command onClick={fillAllAnswers}>Fill all answers</Command>
                <Command onClick={reset}>Reset</Command>
                <Command onClick={clearMessages}>Clear messages</Command>
              </Commands>
            <br/>
              <CrosswordGrid  />
              <br/>
              <DirectionClues direction="across" />
              <br/>
              <DirectionClues direction="down" />
            </div>
          </CrosswordProvider>
        </div>

      </div>
      
    </div>
  );
}

export default MiniCrossword