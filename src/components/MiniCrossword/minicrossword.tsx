import { FaArrowCircleDown } from 'react-icons/fa'
import Sidebar from '../SideBar/sidebar'
import { CrosswordGrid, CrosswordProvider, DirectionClues } from '@jaredreisinger/react-crossword';


const data = {
  across: {
    1: { clue: 'Part of an apple … or an Apple computer.   ', answer: 'XXXX', row: 0, col: 1 },
    5: { clue: 'Path for a car   ', answer: 'XXXX', row: 1, col: 1 },
    6: { clue: 'Shy and easily frightened  ', answer: 'XXXXX', row: 2, col: 0 },
    7: { clue: 'Insinuate   ', answer: 'XXXXX', row: 3, col: 0 },
    8: { clue: '"Its ... just OK"   ', answer: 'XXX', row: 4, col: 0 },
  },
  down: {
    1: { clue: 'True ___ (podcast genre) ', answer: 'XXXXX', row: 0, col: 1 },
    2: { clue: 'Extra energy   ', answer: 'XXXXX', row: 0, col: 2 },
    3: { clue: 'Path for a train that aptly crosses 5-Across   ', answer: 'XXXX', row: 0, col: 3 },
    4: { clue: 'Whirlpool of water   ', answer: 'XXXX', row: 0, col: 4 },
    6: { clue: 'Tiny ___, little boy in "A Christmas Carol"   ', answer: 'XXXX', row: 0, col: 4 },
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