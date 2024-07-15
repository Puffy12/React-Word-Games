export const data = {
across: {
    1: { clue: 'Part of a cherry you shouldnt eat', answer: 'STEM', row: 0, col: 0 },
    5: { clue: '"Detour" sign feature', answer: 'ARROW', row: 1, col: 0 },
    7: { clue: 'Depart', answer: 'LEAVE', row: 2, col: 0 },
    8: { clue: 'Nail polish brand that sounds like two letters of the alphabet', answer: 'ESSIE', row: 3, col: 0 },
    9: { clue: 'Part of a pomegranate you should eat', answer: 'SEED', row: 4, col: 1 },
},
down: { 
    1: { clue: 'Shoppers excuse to "save money"', answer: 'SALE', row: 0, col: 0 },
    2: { clue: 'Head lock?', answer: 'TRESS', row: 0, col: 1 },
    3: { clue: 'Wipe, as a memory card', answer: 'ERASE', row: 0, col: 2 },
    4: { clue: 'Common date night activity', answer: 'MOVIE', row: 0, col: 3 },
    6: { clue: 'Fast-growing plant', answer: 'WEED', row: 1, col: 4 },  
},
} as const;


export const data2 = {
across: {
1: { clue: 'Bad thing to drop while riding a chairlift', answer: 'SKI', row: 0, col: 2 },
4: { clue: 'Batmans archenemy', answer: 'JOKER', row: 1, col: 0 },
6: { clue: 'What a cartoon character might grab onto if theyre swallowed whole', answer: 'UVULA', row: 2, col: 0 },
7: { clue: 'Big name in PCs', answer: 'DELL', row: 3, col: 0 },
8: { clue: '"For Your Eyes ___" (1981 Bond film)', answer: 'ONLY', row: 4, col: 0 },
},
down: { 
1: { clue: 'Prop for Hamlet when he says "Alas, poor Yorick!"', answer: 'SKULL', row: 0, col: 2 },
2: { clue: 'Grace who starred in three Hitchcock films', answer: 'KELLY', row: 0, col: 3 },
3: { clue: 'Savings plan option, for short', answer: 'IRA', row: 0, col: 4 },
4: { clue: 'Olympic sport from Japan', answer: 'JUDO', row: 1, col: 0 },
5: { clue: 'Place for roasting', answer: 'OVEN', row: 1, col: 1 },  
},
} as const;

    
export const data3 = {
    across: {
    1: { clue: 'TV character who says "Weaseling out of things is important to learn. Its what separates us from the animals ... except the weasel"', answer: 'HOMER', row: 0, col: 0 },
    6: { clue: 'Windy City airport', answer: 'OHARE', row: 1, col: 0 },
    7: { clue: 'The only one in the song "Tequila" is "tequila"', answer: 'LYRIC', row: 2, col: 0 },
    8: { clue: 'Crypto lead-in to coin', answer: 'DOGE', row: 3, col: 0 },
    9: { clue: 'Take to court', answer: 'SUE', row: 4, col: 0 },
    },
    down: { 
    1: { clue: 'Waits for a customer service representative, say', answer: 'HOLDS', row: 0, col: 0 },
    2: { clue: '"Dont make me blush!"', answer: 'OHYOU', row: 0, col: 1 },
    3: { clue: 'TV character who says "I forgot to clean the lint basket in the dryer. If someone broke into the house and did laundry, it could start a fire"', answer: 'MARGE', row: 0, col: 2 },
    4: { clue: 'Shallowest of the Great Lakes', answer: 'ERIE', row: 0, col: 3 },
    5: { clue: 'Video camera button', answer: 'REC', row: 0, col: 4 },  
    },
} as const;

export const data4 = {
    across: {
    1: { clue: 'School org. for moms and dads', answer: '', row: 0, col: 2 },
    4: { clue: 'Polymath extraordinaire Sir ___ Newton', answer: '', row: 1, col: 0 },
    6: { clue: 'Symbol of the Olympics', answer: '', row: 2, col: 0 },
    7: { clue: 'Stale and overused, as a saying', answer: '', row: 3, col: 0 },
    8: { clue: '"Absolutely!"', answer: '', row: 4, col: 0 },
    },
    down: { 
    1: { clue: 'Site of the 2024 Summer Olympics', answer: '', row: 0, col: 2 },
    2: { clue: 'Good social skill', answer: '', row: 0, col: 3 },
    3: { clue: 'Really feel a rigorous workout', answer: '', row: 0, col: 4 },
    4: { clue: '___-bitty', answer: '', row: 1, col: 0 },
    5: { clue: 'Really feeling a rigorous workout', answer: '', row: 1, col: 1 },  
    },
} as const;

const crosswordDataArray = [data, data2, data3, data4];

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