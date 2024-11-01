export const data = {
    across: {
        1: { clue: 'With 5-Down, rhyming Japanese philosophy of finding beauty in imperfection', answer: 'WABI', row: 0, col: 1 },
        5: { clue: 'Sneaker bottoms', answer: 'SOLES', row: 1, col: 0 },
        6: { clue: 'Typeface similar to Helvetica', answer: 'ARIAL', row: 2, col: 0 },
        7: { clue: 'Piece of grass', answer: 'ARIAL', row: 2, col: 0 },
        8: { clue: 'Personal items checked by bouncers', answer: 'IDS', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Disney ___', answer: 'WORLD', row: 0, col: 1 },
        2: { clue: 'Pen name', answer: 'ALIAS', row: 0, col: 2 },
        3: { clue: 'Pearl in a pearl necklace, e.g.', answer: 'BEAD', row: 0, col: 3 },
        4: { clue: 'Bit of land in the ocean', answer: 'ISLE', row: 0, col: 4 },
        5: { clue: 'See 1-Across', answer: 'SABI', row: 1, col: 0 },
    },
} as const;


const crosswordDataArray = [data];

export const getRandomCrosswordData9 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex9 = (index: number) => {
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
