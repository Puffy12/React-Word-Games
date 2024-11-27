
export const data = {
    across: {
        1: { clue: 'Joint that can be "flicked"', answer: 'WRIST', row: 0, col: 0 },
        6: { clue: 'Official state sport of South Dakota, Texas and Wyoming', answer: 'RODEO', row: 1, col: 0 },
        7: { clue: 'Phone pop-up', answer: 'ALERT', row: 2, col: 0 },
        8: { clue: 'First thing you typically get at a buffet', answer: 'PLATE', row: 3, col: 0 },
        9: { clue: 'Poetry event', answer: 'SLAM', row: 4, col: 1 },
    },
    down: {
        1: { clue: 'Sandwich alternative', answer: 'WRAP', row: 0, col: 0 },
        2: { clue: 'Toilet paper units', answer: 'ROLLS', row: 0, col: 1 },
        3: { clue: 'Best-case', answer: 'IDEAL', row: 0, col: 2 },
        4: { clue: 'Big name in mattresses', answer: 'SERTA', row: 0, col: 3 },
        5: { clue: 'Ancestral emblem', answer: 'TOTEM', row: 0, col: 4 },
    },
} as const;

const crosswordDataArray = [data];

export const getRandomCrosswordData10 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex10 = (index: number) => {
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
