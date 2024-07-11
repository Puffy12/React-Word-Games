export const data = {
across: {
    1: { clue: 'Part of a cherry you shouldnt eat', answer: '', row: 0, col: 0 },
    5: { clue: '"Detour" sign feature', answer: '', row: 1, col: 0 },
    7: { clue: 'Depart', answer: '', row: 2, col: 0 },
    8: { clue: 'Nail polish brand that sounds like two letters of the alphabet', answer: '', row: 3, col: 0 },
    9: { clue: 'Part of a pomegranate you should eat', answer: '', row: 4, col: 0 },
},
down: { 
    1: { clue: 'Shoppers excuse to "save money"', answer: '', row: 0, col: 0 },
    2: { clue: 'Head lock?', answer: '', row: 0, col: 1 },
    3: { clue: 'Wipe, as a memory card', answer: '', row: 0, col: 2 },
    4: { clue: 'Common date night activity', answer: '', row: 0, col: 3 },
    5: { clue: 'Fast-growing plant', answer: '', row: 0, col: 4 },  
},
} as const;

const crosswordDataArray = [data];

export const getRandomCrosswordData4 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex4 = (index: number) => {
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