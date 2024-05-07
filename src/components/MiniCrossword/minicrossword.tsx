import { FaArrowCircleDown } from 'react-icons/fa'
import Sidebar from '../SideBar/sidebar'
import { CrosswordGrid, CrosswordProvider, DirectionClues } from '@jaredreisinger/react-crossword';


const data = {
  across: {
    1: { clue: 'This', answer: 'XXX', row: 0, col: 0 },
    4: { clue: 'is', answer: 'XXX', row: 0, col: 4 },
    7: { clue: 'not', answer: 'XXX', row: 1, col: 0 },
    8: { clue: 'a', answer: 'XXXX', row: 1, col: 4 },
    10: { clue: 'real', answer: 'XX', row: 2, col: 0 },
  },
  down: {
    1: { clue: 'create.', answer: 'XXXX', row: 0, col: 0 },
    2: { clue: 'All', answer: 'XXXX', row: 0, col: 1 },
    3: { clue: 'of', answer: 'XX', row: 0, col: 2 },
    4: { clue: 'the', answer: 'XXXXXX', row: 0, col: 4 },
    5: { clue: 'answers', answer: 'XX', row: 0, col: 5 },
  },
} as const;

function MiniCrossword() {
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

        <div className="text-blue-400 w-14 h-14 text-5xl cursor-pointer z-10 mt-20" >
          <FaArrowCircleDown />
        </div>

        <div style={{ width: '30em', display: 'flex' }} >
          <CrosswordProvider data={data} storageKey="ipuz-example">
            <DirectionClues direction="across" />
            <CrosswordGrid />
            <DirectionClues direction="down" />
          </CrosswordProvider>
        </div>
      </div>
    </div>
  );
}

export default MiniCrossword