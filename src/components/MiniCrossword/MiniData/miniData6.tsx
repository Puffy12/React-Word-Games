export const data = {
    across: {
        1: { clue: 'Good ___, bad ___ (classic routine)', answer: 'COP', row: 0, col: 2 },
        4: { clue: 'Pick up on, as a sound', answer: 'HEAR', row: 1, col: 1 },
        5: { clue: 'Pick up on, as a vibe', answer: 'SENSE', row: 2, col: 0 },
        6: { clue: 'Actress Ana of "Ugly Betty"', answer: 'ORTIZ', row: 3, col: 0 },
        7: { clue: 'Not as much', answer: 'LESS', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Homophone of 5-Across', answer: 'CENTS', row: 0, col: 2 },
        2: { clue: 'Fertile area in a desert', answer: 'OASIS', row: 0, col: 3 },
        3: { clue: 'Biden\'s title, informally', answer: 'PREZ', row: 0, col: 4 },
        4: { clue: 'Homophone of 4-Across', answer: 'HERE', row: 1, col: 1 },
        5: { clue: 'Do, re, mi, fa, ___ ...', answer: 'SOL', row: 2, col: 0 },
    },
} as const;

const crosswordDataArray = [data];

export const getRandomCrosswordData6 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex6 = (index: number) => {
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
