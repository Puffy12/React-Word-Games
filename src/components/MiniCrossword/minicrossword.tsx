import { FaArrowCircleDown } from 'react-icons/fa'
import Sidebar from '../SideBar/sidebar'
import Crossword, { CrosswordImperative, CrosswordProps } from '@jaredreisinger/react-crossword';
import { Command, Commands, CrosswordWrapper } from '../Crossword/crossword-data';
import { useCallback, useEffect, useRef, useState } from 'react';
import { data6 } from './miniData';

function MiniCrossword() {
  const crossword = useRef<CrosswordImperative>(null);

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

  // We don't really *do* anything with callbacks from the Crossword component,
  // but we can at least show that they are happening.  You would want to do
  // something more interesting than simply collecting them as messages.
  const messagesRef = useRef<HTMLPreElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const clearMessages = useCallback<React.MouseEventHandler>(() => {
    setMessages([]);
  }, []);

  const addMessage = useCallback((message: string) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }
    const { scrollHeight } = messagesRef.current;
    messagesRef.current.scrollTo(0, scrollHeight);
  }, [messages]);

  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrect = useCallback<Required<CrosswordProps>['onCorrect']>(
    (direction, number, answer) => {
      addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessage]
  );

  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrect = useCallback<
    Required<CrosswordProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessage(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessage]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrect = useCallback<
    Required<CrosswordProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessage]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChange = useCallback<Required<CrosswordProps>['onCellChange']>(
    (row, col, char) => {
      addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessage]
  );

  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  // We don't really *do* anything with callbacks from the Crossword component,
  // but we can at least show that they are happening.  You would want to do
  // something more interesting than simply collecting them as messages.
  const messagesProviderRef = useRef<HTMLPreElement>(null);
  const [messagesProvider ] = useState<string[]>([]); //setMessagesProvider


  useEffect(() => {
    if (!messagesProviderRef.current) {
      return;
    }
    const { scrollHeight } = messagesProviderRef.current;
    messagesProviderRef.current.scrollTo(0, scrollHeight);
  }, [messagesProvider]);
  
  
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
            Does not work on smaller screens.
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

        <div className="hidden sm:block ">
          <div style={{ width: '40em', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em' }}>
              <Commands>
                <Command onClick={focus}>Focus</Command>
                <Command onClick={fillOneCell}>Fill the first letter of 2-down</Command>
                <Command onClick={fillAllAnswers}>Fill all answers</Command>
                <Command onClick={reset}>Reset</Command>
                <Command onClick={clearMessages}>Clear messages</Command>
              </Commands>
              <CrosswordWrapper>
                <Crossword
                  ref={crossword}
                  data={data6}
                  storageKey="first-example"
                  onCorrect={onCorrect}
                  onLoadedCorrect={onLoadedCorrect}
                  onCrosswordCorrect={onCrosswordCorrect}
                  onCellChange={onCellChange}
                />
              </CrosswordWrapper>
          </div>
        </div>  
      </div>
      
    </div>
  );
}

export default MiniCrossword