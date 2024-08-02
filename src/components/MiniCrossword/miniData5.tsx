export const data = {
    across: {
        1: { clue: 'Orion\'s ___ (giant waist of space?)', answer: 'BELT', row: 0, col: 1 },
        5: { clue: 'Sides in a historic tennis "battle"', answer: 'SEXES', row: 1, col: 0 },
        6: { clue: 'You might really feel this in your core', answer: 'PLANK', row: 2, col: 0 },
        7: { clue: '"___ well that ends well!"', answer: 'ALLS', row: 3, col: 0 },
        8: { clue: 'W.S.J. or WaPo competitor', answer: 'NYT', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'What\'s visible when wearing a crop top', answer: 'BELLY', row: 0, col: 1 },
        2: { clue: 'Glorify', answer: 'EXALT', row: 0, colr: 2 },
        3: { clue: 'Monocle\'s middle', answer: 'LENS', row: 0, col: 3 },
        4: { clue: '"Shame, shame!" clicking sound', answer: 'TSK', row: 0, col: 4 },
        5: { clue: 'Reach across', answer: 'SPAN', row: 1, col: 0 },
    },
} as const;


const crosswordDataArray = [data];

export const getRandomCrosswordData5 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex5 = (index: number) => {
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