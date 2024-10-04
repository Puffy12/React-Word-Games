
export const data = {
    across: {
        1: { clue: 'Noodle soup that\'s the national dish of Vietnam', answer: 'PHO', row: 0, col: 1 },
        4: { clue: 'Scatterbrained and unreliable', answer: 'FLAKY', row: 1, col: 0 },
        6: { clue: 'Like silence in a horror movie, say', answer: 'EERIE', row: 2, col: 0 },
        7: { clue: '"Sorry, can you repeat that? I ___ listening"', answer: 'WASNT', row: 3, col: 0 },
        8: { clue: 'Language spoken in Bangkok', answer: 'THAI', row: 4, col: 1 },
    },
    down: {
        1: { clue: 'Fold on a kilt', answer: 'PLEAT', row: 0, col: 1 },
        2: { clue: 'Excessively negative, as criticism', answer: 'HARSH', row: 0, col: 2 },
        3: { clue: 'Hawaiian diacritical mark that looks like an apostrophe', answer: 'OKINA', row: 0, col: 3 },
        4: { clue: 'Hardly any', answer: 'FEW', row: 1, col: 0 },
        5: { clue: 'Mythical mountain monster', answer: 'YETI', row: 1, col: 4 },
    },
} as const;

export const data2 = {
    across: {
        1: { clue: 'What "very" stands for in the mnemonic "My Very Educated Mother ..."', answer: 'VENUS', row: 0, col: 0 },
        6: { clue: 'Like some mobile game purchases', answer: 'INAPP', row: 1, col: 0 },
        7: { clue: 'Come up, as a situation', answer: 'ARISE', row: 2, col: 0 },
        8: { clue: 'More than just enjoyed', answer: 'LOVED', row: 3, col: 0 },
        9: { clue: 'Hockey goal component', answer: 'NET', row: 4, col: 1 },
    },
    down: {
        1: { clue: 'Tube in a lab', answer: 'VIAL', row: 0, col: 0 },
        2: { clue: 'Disgraced energy company with a 2001 bankruptcy', answer: 'ENRON', row: 0, col: 1 },
        3: { clue: 'Overly trusting, perhaps', answer: 'NAIVE', row: 0, col: 2 },
        4: { clue: 'Underdog\'s victory', answer: 'UPSET', row: 0, col: 3 },
        5: { clue: 'Went really fast', answer: 'SPED', row: 0, col: 4 },
    },
} as const;

export const data3= {
    across: {
        1: { clue: 'What lanternfish can do, using organs called photophores', answer: 'GLOW', row: 0, col: 1 },
        5: { clue: 'Channel with "Vanderpump Rules" and "Below Deck"', answer: 'BRAVO', row: 1, col: 0 },
        6: { clue: 'Consumed', answer: 'EATEN', row: 2, col: 0 },
        7: { clue: 'Really need a bath', answer: 'STINK', row: 3, col: 0 },
        8: { clue: 'Change for a twenty', answer: 'TENS', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Storm drain cover', answer: 'GRATE', row: 0, col: 1 },
        2: { clue: '"Et tu, Brute?" language', answer: 'LATIN', row: 0, col: 2 },
        3: { clue: 'Bakery fixtures', answer: 'OVENS', row: 0, col: 3 },
        4: { clue: 'Stats or policy nerd', answer: 'WONK', row: 0, col: 4 },
        5: { clue: 'Work email sign-off', answer: 'BEST', row: 1, col: 0 },
    },
} as const;

const crosswordDataArray = [data, data2, data3];

export const getRandomCrosswordData8 = (index: number) => {
    let randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    while(randomIndex === index){
    randomIndex = Math.floor(Math.random() * crosswordDataArray.length);
    }
    return crosswordDataArray[randomIndex];
};

export const getCrosswordDataByIndex8 = (index: number) => {
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
