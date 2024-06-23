export const data = {
    across: {
      1: { clue: 'Sizzlingly popular', answer: 'HOT', row: 0, col: 1 },
      4: { clue: 'Centerpieces at wedding receptions', answer: 'CAKES', row: 1, col: 0 },
      6: { clue: 'Bird-related', answer: 'AVIAN', row: 2, col: 0 },
      7: { clue: 'Modern payment app', answer: 'VENMO', row: 3, col: 0 },
      8: { clue: 'Feeling you might have while pacing the floor', answer: 'ANGST', row: 4, col: 0 },
    },
    down: { 
      1: { clue: 'Sanctuary', answer: 'HAVEN', row: 0, col: 1 },
      2: { clue: 'Giving the green light to, for short', answer: 'OKING', row: 0, col: 2 },
      3: { clue: 'The Lions and the Tigers, for Detroit', answer: 'TEAMS', row: 0, col: 3 },
      4: { clue: 'Vena ___ (blood vessel to the heart)', answer: 'CAVA', row: 1, col: 0 },
      5: { clue: 'Sassy little brat', answer: 'SNOT', row: 1, col: 4 },  },
  } as const;

export const data2 = {
  across: {
    1: { clue: 'What drivers in New Jersey cant legally get on their own', answer: 'GAS', row: 0, col: 1 },
    4: { clue: 'World revolution?', answer: 'ORBIT', row: 1, col: 0 },
    6: { clue: 'Shreks beloved', answer: 'FIONA', row: 2, col: 0 },
    7: { clue: 'Cabin ___ (cooped-up restlessness)', answer: 'FEVER', row: 3, col: 0 },
    8: { clue: 'Hardly any', answer: 'FEW', row: 4, col: 1 },
  },
  down: { 
    1: { clue: '"Good ___!" (Charlie Brown catchphrase)', answer: 'GREIF', row: 0, col: 1 },
    2: { clue: 'Superior to', answer: 'ABOVE', row: 0, col: 2 },
    3: { clue: 'Band of tissue connecting muscle and bone', answer: 'SINEW', row: 0, col: 3 },
    4: { clue: 'A little bit "not quite right"', answer: 'OFF', row: 1, col: 0 },
    5: { clue: 'Paving substance', answer: 'TAR', row: 1, col: 4 },  },
} as const;

export const data3 = {
  across: {
    1: { clue: '"10 ___ or less" (supermarket line)', answer: 'ITEMS', row: 0, col: 0 },
    6: { clue: 'Gutsy boldness', answer: 'MOXIE', row: 1, col: 0 },
    7: { clue: 'June celebration', answer: 'PRIDE', row: 2, col: 0 },
    8: { clue: 'One of 51 written by Alexander Hamilton for the Federalist Papers', answer: 'ESSAY', row: 3, col: 0 },
    9: { clue: '"___ luck!" ("Go get em!")', answer: 'LOTSA', row: 4, col: 0 },
  },
  down: { 
    1: { clue: 'Urge forcefully', answer: 'IMPEL', row: 0, col: 0 },
    2: { clue: 'Upper body, to a sculptor', answer: 'TORSO', row: 0, col: 1 },
    3: { clue: 'Have life', answer: 'EXIST', row: 0, col: 2 },
    4: { clue: 'King with a golden touch', answer: 'MIDAS', row: 0, col: 3 },
    5: { clue: '"Later, alligator!"', answer: 'SEEYA', row: 0, col: 4 },  },
} as const;

const crosswordDataArray = [data, data2, data3];

export const getRandomCrosswordData3 = (index: number) => {
  let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
  while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
  }
  return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex3 = (index: number) => {
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