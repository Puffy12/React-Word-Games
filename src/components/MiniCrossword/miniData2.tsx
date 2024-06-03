export const data = {
  across: {
    1: { clue: 'Exactly right', answer: 'DEADON', row: 0, col: 0 },
    7: { clue: 'Jenna who plays Wednesday Adams on TVs "Wednesday"', answer: 'ORTEGA', row: 1, col: 0 },
    8: { clue: 'Stick in a Bloody Mary', answer: 'CELERY', row: 2, col: 0 },
    9: { clue: 'Bonobos, e.g.', answer: 'APES', row: 3, col: 2 },
    10: { clue: 'Something for a wizard or a T.S.A. agent', answer: 'WAND', row: 4, col: 0 },
    12: { clue: 'Not running late', answer: 'ONTIME', row: 5, col: 0 },
    15: { clue: 'Cutlery for cutting', answer: 'KNIVES', row: 6, col: 0 },
    16: { clue: 'Leave a union', answer: 'SECEDE', row: 7, col: 0 },

  },
  down: { 
    1: { clue: 'Nurses workmate, informally', answer: 'DOC', row: 0, col: 0 },
    2: { clue: 'Poets "before"', answer: 'ERE', row: 0, col: 1 },
    3: { clue: 'It covers about one-fifth of the earths surface', answer: 'ATLANTIC', row: 0, col: 2 },
    4: { clue: 'Trip down the rabbit hole on a subject', answer: 'DEEPDIVE', row: 0, col: 3 },
    5: { clue: 'Fearsome fairy tale monster', answer: 'OGRE', row: 0, col: 4 }, 
    6: { clue: '"No" votes', answer: 'NAYS', row: 0, col: 5 },
    10: { clue: 'Pans in Chinese cooking', answer: 'WOKS', row: 4, col: 0 },
    11: { clue: 'Diarist Frank', answer: 'ANNE', row: 4, col: 1 },
    13: { clue: 'Size above small: Abbr.', answer: 'MED', row: 5, col: 4 },
    14: { clue: 'Suffix with Japan or Vietnam', answer: 'ESE', row: 5, col: 5 },
  },

} as const;

export const data2 = {
  across: {
    1: { clue: 'Fezes and fedoras', answer: '', row: 0, col: 1 },
    5: { clue: 'Trixie and ___, drag queen comedy duo', answer: '', row: 1, col: 0 },
    6: { clue: 'Take in, as a cat', answer: '', row: 2, col: 0 },
    7: { clue: 'Vehicle for prom night', answer: '', row: 3, col: 0 },
    8: { clue: 'Aliens, for short', answer: '', row: 4, col: 0 },
  },
  down: { 
    1: { clue: '"Ive ___ up to here!"', answer: '', row: 0, col: 1 },
    2: { clue: 'Tiny building blocks', answer: '', row: 0, col: 2 },
    3: { clue: 'What you might pass off a misspelling as', answer: '', row: 0, col: 3 },
    4: { clue: 'Took a chair', answer: '', row: 0, col: 4 },
    5: { clue: 'Hearty leafy green', answer: '', row: 1, col: 0 },  },
} as const;

export const data3 = {
  across: {
    1: { clue: 'Fixture in a skate park', answer: 'RAMP', row: 0, col: 1 },
    5: { clue: 'Evergreen tree with aromatic wood', answer: 'CEDAR', row: 1, col: 0 },
    6: { clue: 'Inadvisable way to tackle an entire large pizza', answer: 'ALONE', row: 2, col: 0 },
    7: { clue: 'Host of the 2024 Summer Olympics', answer: 'PARIS', row: 3, col: 0 },
    8: { clue: 'Corporate boss, for short', answer: 'EXEC', row: 4, col: 0 },
  },
  down: { 
    1: { clue: '"Chill!"', answer: 'RELAX', row: 0, col: 1 },
    2: { clue: 'Absolute love', answer: 'ADORE', row: 0, col: 2 },
    3: { clue: '___ pixie dream girl (movie trope)', answer: 'MANIC', row: 0, col: 3 },
    4: { clue: 'White House title: Abbr.', answer: 'PRES', row: 0, col: 4 },
    5: { clue: 'Superhero garment', answer: 'CAPE', row: 1, col: 0 },  
  },
} as const;

const crosswordDataArray = [data, data2, data3];

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