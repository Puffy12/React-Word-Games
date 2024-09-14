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

export const data2 = {
    across: {
        1: { clue: 'Clothed (in)', answer: 'CLAD', row: 0, col: 1 },
        5: { clue: 'Ring of light', answer: 'HALO', row: 1, col: 1 },
        6: { clue: 'Black ___ (dangerous spider)', answer: 'WIDOW', row: 2, col: 0 },
        7: { clue: 'Longtime talk show host known for pulling pranks on her guests', answer: 'ELLEN', row: 3, col: 0 },
        8: { clue: 'Worker with a comb, perhaps?', answer: 'BEE', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'South American country with a 4,000-mile coastline', answer: 'CHILE', row: 0, col: 1 },
        2: { clue: 'Tool for a soup kitchen volunteer', answer: 'LADLE', row: 0, col: 2 },
        3: { clue: 'Succulent in some health drinks', answer: 'ALOE', row: 0, col: 3 },
        4: { clue: '"I\'m reading a book about antigravity. I can\'t put it ___!" (groaner)', answer: 'DOWN', row: 0, col: 4 },
        6: { clue: 'One "w" in www', answer: 'WEB', row: 2, col: 0 },
    },
} as const;

export const data3 = {
    across: {
        1: { clue: 'Shortens, as a skirt', answer: 'HEMS', row: 0, col: 3 },
        10: { clue: 'Agrees to receive promotional emails, say', answer: 'PLANET', row: 1, col: 1 },
        12: { clue: 'Feats for gymnasts or bowlers', answer: 'RIDDLE', row: 2, col: 1 },
        13: { clue: 'What some teachers claim to have in the backs of their heads', answer: 'PET', row: 3, col: 0 },
        5: { clue: 'What each word in "My Very Educated Mother Just Served Us Noodles" is a stand-in for', answer: 'SOW', row: 3, col: 4 },
        7: { clue: 'Puzzling question', answer: 'OPTSIN', row: 4, col: 0 },
        8: { clue: 'Nonhuman "child"', answer: 'SPLITS', row: 5, col: 0 },
        9: { clue: '"You reap what you ___"', answer: 'EYES', row: 6, col: 0 },
    },
    down: {
        1: { clue: '"I\'ve ___ it up to here with you!"', answer: 'HAD', row: 0, col: 3 },
        11: { clue: 'Feminine family nickname', answer: 'ENDSIT', row: 0, col: 4 },
        2: { clue: 'Calls off the relationship', answer: 'MELONS', row: 0, col: 5 },
        3: { clue: 'Cantaloupes and the like', answer: 'STEW', row: 0, col: 6 },
        4: { clue: 'Hearty soup', answer: 'PREPPY', row: 1, col: 1 },
        5: { clue: 'Like polo shirts and varsity jackets', answer: 'LITTLE', row: 1, col: 2 },
        6: { clue: 'Minuscule', answer: 'POSE', row: 3, col: 0 },
        8: { clue: 'Cat or cow, in yoga', answer: 'SIS', row: 4, col: 3 },
    },
} as const;

const crosswordDataArray = [data, data2];

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
