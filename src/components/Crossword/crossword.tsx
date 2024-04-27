import React, { useCallback, useEffect, useRef, useState } from 'react';
import Crossword, {
  CrosswordImperative,
  CrosswordGrid,
  CrosswordProps,
  CrosswordProvider,
  DirectionClues,
  useIpuz,
} from '@jaredreisinger/react-crossword'; //  CrosswordProviderImperative,CrosswordProviderProps,
import Sidebar from '../SideBar/sidebar';
import { data, Page, Header, Commands, Command, CrosswordMessageBlock, CrosswordWrapper, ipuzData, IpuzWrapper} from './crossword-data';
import "./app.css";
import { FaArrowCircleDown } from 'react-icons/fa';


// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...

function crossword() {
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


  const fromIpuz = useIpuz(ipuzData);

  return (
    <div className='bg-stone-600 text-white'>
    <Sidebar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-600">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-8">
          Welcome to the Crossword Game
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          This game is currently in development. This game is only for Larger Screens.  
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

      <div className="text-blue-400 w-14 h-14 text-5xl cursor-pointer z-10 mt-20" onClick={() => scrollToElement("crossword")}>
        <FaArrowCircleDown />
      </div>
    </div>
    <Page className='hidden md:hidden lg:block xl:block 2xl:block '>
      <div  className='text-center'>
        <Header>Cross Word</Header>

        <p>
          This is a demo app that makes use of the react-crossword
          component. It exercises most of the functionality, so that you can see
          how to do so.
        </p>
        <Commands>
          <Command onClick={focus}>Focus</Command>
          <Command onClick={fillOneCell}>Fill the first letter of 2-down</Command>
          <Command onClick={fillAllAnswers}>Fill all answers</Command>
          <Command onClick={reset}>Reset</Command>
          <Command onClick={clearMessages}>Clear messages</Command>
        </Commands>

        <CrosswordMessageBlock>
          <CrosswordWrapper>
            <Crossword
              ref={crossword}
              data={data}
              storageKey="first-example"
              onCorrect={onCorrect}
              onLoadedCorrect={onLoadedCorrect}
              onCrosswordCorrect={onCrosswordCorrect}
              onCellChange={onCellChange}
            />
          </CrosswordWrapper>
        </CrosswordMessageBlock>

        <IpuzWrapper id='crossword'>
          <CrosswordProvider data={fromIpuz!} storageKey="ipuz-example">
            <DirectionClues direction="across" />
            <CrosswordGrid />
            <DirectionClues direction="down" />
          </CrosswordProvider>
        </IpuzWrapper>
      </div>


      {/* <CrosswordMessageBlock> */}
      {/* <CrosswordWrapper>
          <Crossword data={fromIpuz!} storageKey="ipuz-example" />
        </CrosswordWrapper> */}
      {/* </CrosswordMessageBlock> */}
    </Page>
    </div>
  );
}

export default crossword;

/*

  // all the same functionality, but for the decomposed CrosswordProvider
  const crosswordProvider = useRef<CrosswordProviderImperative>(null);

  const focusProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.focus();
  }, []);

  const fillOneCellProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswersProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      crosswordProvider.current?.fillAllAnswers();
    },
    []
  );

  const resetProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.reset();
  }, []);

  const clearMessagesProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      setMessagesProvider([]);
    },
    []
  );

  const addMessageProvider = useCallback((message: string) => {
    setMessagesProvider((m) => m.concat(`${message}\n`));
  }, []);


  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCorrect']
  >(
    (direction, number, answer) => {
      addMessageProvider(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessageProvider]
  );

  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessageProvider(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessageProvider]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessageProvider(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessageProvider]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChangeProvider = useCallback<
    Required<CrosswordProviderProps>['onCellChange']
  >(
    (row, col, char) => {
      addMessageProvider(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessageProvider]
  );
*/