import Sidebar from '../SideBar/sidebar'
import Crossword, {
  CrosswordImperative,
  CrosswordGrid,
  CrosswordProps,
  CrosswordProvider,
  CrosswordProviderImperative,
  CrosswordProviderProps,
  DirectionClues,
  useIpuz,
} from '@jaredreisinger/react-crossword';
import styled from 'styled-components';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
  },
};

const CrosswordWrapper = styled.div`
  max-width: 30em;

  /* and some fun making use of the defined class names */
  .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }

  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }

    text-decoration: line-through;
    color: rgb(130, 130, 130);
  }
`;
const CrosswordMessageBlock = styled.div`
  margin: 2em 0 4em;
  display: flex;
  gap: 2em;
  max-height: 20em;
`;


function crossword() {
  return (
    <div>
      <Sidebar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-600">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-8">
            Welcome to the Crossword Game
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
      </div>

      <CrosswordMessageBlock>
        <CrosswordWrapper>
          <Crossword
            data={{
              across: {
                1: {
                  clue: 'one plus one',
                  answer: 'TWO',
                  row: 0,
                  col: 0,
                },
              },
              down: {
                2: {
                  clue: 'opposite of "off"',
                  answer: 'ON',
                  row: 0,
                  col: 2,
                },
              },
            }}
            theme={{ allowNonSquare: true }}
            storageKey="third-example"
          />
        </CrosswordWrapper>
      </CrosswordMessageBlock>
    </div>
  );
}

export default crossword
