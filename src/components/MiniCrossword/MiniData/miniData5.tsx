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
        2: { clue: 'Glorify', answer: 'EXALT', row: 0, col: 2 },
        3: { clue: 'Monocle\'s middle', answer: 'LENS', row: 0, col: 3 },
        4: { clue: '"Shame, shame!" clicking sound', answer: 'TSK', row: 0, col: 4 },
        5: { clue: 'Reach across', answer: 'SPAN', row: 1, col: 0 },
    },
} as const;

export const data2 = {
    across: {
        1: { clue: 'With 1-Down, 2024 album in which Beyoncé is "reinventing American music in her own image," per Rolling Stone', answer: 'COWBOY', row: 0, col: 1 },
        7: { clue: 'Sewer entrance', answer: 'MANHOLE', row: 1, col: 0 },
        8: { clue: 'Brand that coined color names like Purple Pizzazz and Jazzberry Jam', answer: 'CRAYOLA', row: 2, col: 0 },
        9: { clue: 'Lawyer: Abbr.', answer: 'ATT', row: 3, col: 0 },
        10: { clue: 'Baby fox or skunk', answer: 'KIT', row: 3, col: 4 },
        11: { clue: 'Dwellings made from animal hides', answer: 'TEEPEES', row: 4, col: 0 },
        13: { clue: 'Pours down', answer: 'RAINS', row: 5, col: 1 },
        14: { clue: 'Size between small and large: Abbr.', answer: 'MED', row: 6, col: 2 },
    },
    down: {
        1: { clue: 'See 1-Across', answer: 'CARTER', row: 0, col: 1 },
        2: { clue: 'Like gymnasts and relay racers, at the Olympics', answer: 'ONATEAM', row: 0, col: 2 },
        3: { clue: '"How come?"', answer: 'WHY', row: 0, col: 3 },
        4: { clue: 'One of a pair on a shelf', answer: 'BOOKEND', row: 0, col: 4 },
        5: { clue: 'Simple skateboard tricks', answer: 'OLLIES', row: 0, col: 5 },
        6: { clue: 'Poet William Butler ___', answer: 'YEATS', row: 0, col: 6 },
        7: { clue: 'Exam for a future doc', answer: 'MCAT', row: 1, col: 0 },
        12: { clue: 'Eight slices of pizza, typically', answer: 'PIE', row: 4, col: 3 },
    },
} as const;

export const data3 = {
    across: {
        1: { clue: 'The first blank in this phrase: From ___ to ___', answer: 'HEAD', row: 0, col: 1 },
        5: { clue: '"The Hobbit" hobbit', answer: 'BILBO', row: 1, col: 0 },
        6: { clue: 'A 16 seed beating a 1 seed, e.g.', answer: 'UPSET', row: 2, col: 0 },
        7: { clue: 'Feeling of ill will', answer: 'SPITE', row: 3, col: 0 },
        8: { clue: 'The second blank in this phrase: From ___ to ___', answer: 'TOE', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Creature able to hold its breath underwater for up to 30 minutes', answer: 'HIPPO', row: 0, col: 1 },
        2: { clue: 'Name that sounds like the twelfth and third letters of the alphabet', answer: 'ELSIE', row: 0, col: 2 },
        3: { clue: 'Help with a crime', answer: 'ABET', row: 0, col: 3 },
        4: { clue: 'Pour love (on)', answer: 'DOTE', row: 0, col: 4 },
        5: { clue: 'Opposite of boom, on Wall Street', answer: 'BUST', row: 1, col: 0 },
    },
} as const;

export const data4 = {
    across: {
        1: { clue: 'Bit of romantic potential', answer: '', row: 0, col: 0 },
        6: { clue: 'One able to pass a Captcha test (hopefully!)', answer: '', row: 1, col: 0 },
        7: { clue: 'Protein-building acid type', answer: '', row: 2, col: 0 },
        8: { clue: 'Card tricks, disappearing acts, etc.', answer: '', row: 3, col: 0 },
        9: { clue: 'Failed to float', answer: '', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Decorative pillow cover', answer: '', row: 0, col: 0 },
        2: { clue: 'Mountain lions', answer: '', row: 0, col: 1 },
        3: { clue: 'Female friend, in Spanish', answer: '', row: 0, col: 2 },
        4: { clue: 'Rushed through the door', answer: '', row: 0, col: 3 },
        5: { clue: 'When repeated, classic kind of joke', answer: '', row: 0, col: 4 },
    },
} as const;


const crosswordDataArray = [data, data2, data3, data4];

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