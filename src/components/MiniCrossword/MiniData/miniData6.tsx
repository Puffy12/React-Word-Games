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

export const data2 = {
    across: {
        1: { clue: 'Eight: Prefix', answer: 'OCTO', row: 0, col: 0 },
        11: { clue: 'Like residents of Kathmandu', answer: 'FROZE', row: 1, col: 0 },
        12: { clue: 'Casually drink', answer: 'FOREST', row: 2, col: 0 },
        13: { clue: 'The "1" of $0.01', answer: 'SWIMCAP', row: 3, col: 0 },
        5: { clue: 'Got stuck, as a video', answer: 'NEPALI', row: 4, col: 1 },
        7: { clue: 'Over 90% of Maine and 80% of New Hampshire', answer: 'SIPON', row: 5, col: 2 },
        9: { clue: 'Coverage of the Summer Olympics?', answer: 'CENT', row: 6, col: 3 },
    },
    down: {
        1: { clue: 'Turn-___ (unattractive qualities)', answer: 'OFFS', row: 0, col: 0 },
        10: { clue: 'Ice cream purchase', answer: 'CROWN', row: 0, col: 1 },
        2: { clue: 'Symbol in the Budweiser and Corona logos', answer: 'TORIES', row: 0, col: 2 },
        3: { clue: 'Defeated party in the recent U.K. elections', answer: 'OZEMPIC', row: 0, col: 3 },
        4: { clue: 'Popular weight loss drug', answer: 'ESCAPE', row: 1, col: 4 },
        6: { clue: 'Ford S.U.V.', answer: 'TALON', row: 2, col: 5 },
        8: { clue: 'Eagle\'s claw', answer: 'PINT', row: 3, col: 6 },
    },
} as const;

const crosswordDataArray = [data, data2];

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
