export const data = {
    across: {
      1: { clue: 'Exactly right', answer: '', row: 0, col: 0 },
      7: { clue: 'Jenna who plays Wednesday Addams on TVs "Wednesday"', answer: '', row: 1, col: 0 },
      8: { clue: 'Stick in a Bloody Mary', answer: 'CELERY', row: 2, col: 0 },
      9: { clue: 'Bonobos, e.g.', answer: '', row: 3, col: 2 },
      10: { clue: 'Something for a wizard or a T.S.A. agent', answer: '', row: 4, col: 0 },
      12: { clue: 'Not running late', answer: '', row: 5, col: 0 },
      15: { clue: 'Cutlery for cutting', answer: '', row: 6, col: 0 },
      16: { clue: 'Leave a union', answer: '', row: 7, col: 0 },

    },
    down: { 
      1: { clue: 'Nurses workmate, informally', answer: '', row: 0, col: 0 },
      2: { clue: 'Poets "before"', answer: '', row: 0, col: 1 },
      3: { clue: 'It covers about one-fifth of the earths surface', answer: '', row: 0, col: 2 },
      4: { clue: 'Trip down the rabbit hole on a subject', answer: '', row: 0, col: 3 },
      5: { clue: 'Fearsome fairy tale monster', answer: '', row: 0, col: 4 },  },
      6: { clue: '"No" votes', answer: '', row: 0, col: 5 },
      10: { clue: 'Pans in Chinese cooking', answer: '', row: 4, col: 0 },
      11: { clue: 'Diarist Frank', answer: '', row: 4, col: 1 },
      13: { clue: 'Size above small: Abbr.', answer: 'MED', row: 5, col: 4 },
      14: { clue: 'Suffix with Japan or Vietnam', answer: 'ESE', row: 5, col: 5 },

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