export const data = {
    across: {
      1: { clue: '', answer: '', row: 0, col: 0 },
      4: { clue: '', answer: '', row: 1, col: 0 },
      6: { clue: '', answer: '', row: 2, col: 0 },
      7: { clue: '', answer: '', row: 3, col: 0 },
      8: { clue: '', answer: '', row: 4, col: 0 },
    },
    down: { 
      1: { clue: '', answer: '', row: 0, col: 0 },
      2: { clue: '', answer: '', row: 0, col: 1 },
      3: { clue: '', answer: '', row: 0, col: 2 },
      4: { clue: '', answer: '', row: 0, col: 3 },
      5: { clue: '', answer: '', row: 0, col: 4 },  },
  } as const;

const crosswordDataArray = [data];

export const getRandomCrosswordData2 = (index: number) => {
  let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
  while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
  }
  return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex2 = (index: number) => {
  if (index < 0 || index >= crosswordDataArray.length) {
    throw new Error("Index out of bounds");
  }
  return crosswordDataArray[index];
};

export const example = {
  across: {
    1: { clue: '', answer: '', row: 0, col: 0 },
    4: { clue: '', answer: '', row: 1, col: 0 },
    6: { clue: '', answer: '', row: 2, col: 0 },
    7: { clue: '', answer: '', row: 3, col: 0 },
    8: { clue: '', answer: '', row: 4, col: 0 },
  },
  down: { 
    1: { clue: '', answer: '', row: 0, col: 0 },
    2: { clue: '', answer: '', row: 0, col: 1 },
    3: { clue: '', answer: '', row: 0, col: 2 },
    4: { clue: '', answer: '', row: 0, col: 3 },
    5: { clue: '', answer: '', row: 0, col: 4 },  },
} as const;