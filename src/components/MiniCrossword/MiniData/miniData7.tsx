export const data = {
    across: {
        1: { clue: 'Hair with mascara on it', answer: 'LASH', row: 0, col: 0 },
        5: { clue: 'Emotion in "Inside Out 2" who opens up a "sar-chasm" in Riley\'s mind', answer: 'ENNUI', row: 1, col: 0 },
        7: { clue: 'One finding work for an actor or author', answer: 'AGENT', row: 2, col: 0 },
        8: { clue: 'Looks behind couches and curtains, say', answer: 'SEEKS', row: 3, col: 0 },
        9: { clue: 'Makes a mistake', answer: 'ERRS', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Renter\'s agreement', answer: 'LEASE', row: 0, col: 0 },
        2: { clue: 'Emotion in "Inside Out" who blows flames out of his head', answer: 'ANGER', row: 0, col: 1 },
        3: { clue: 'Mocking smile', answer: 'SNEER', row: 0, col: 2 },
        4: { clue: 'Beefcakes', answer: 'HUNKS', row: 0, col: 3 },
        6: { clue: '"___ all I ask …"', answer: 'ITS', row: 1, col: 4 },
    },
} as const;


const crosswordDataArray = [data];

export const getRandomCrosswordData7 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex7 = (index: number) => {
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
    5: { clue: '', answer: '', row: 0, col: 4 },  
    },
} as const;
