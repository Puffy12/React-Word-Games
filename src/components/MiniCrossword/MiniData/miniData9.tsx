export const data = {
    across: {
        1: { clue: 'With 5-Down, rhyming Japanese philosophy of finding beauty in imperfection', answer: 'WABI', row: 0, col: 1 },
        5: { clue: 'Sneaker bottoms', answer: 'SOLES', row: 1, col: 0 },
        6: { clue: 'Typeface similar to Helvetica', answer: 'ARIAL', row: 2, col: 0 },
        7: { clue: 'Piece of grass', answer: 'BLADE', row: 3, col: 0 },
        8: { clue: 'Personal items checked by bouncers', answer: 'IDS', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Disney ___', answer: 'WORLD', row: 0, col: 1 },
        2: { clue: 'Pen name', answer: 'WORLD', row: 0, col: 1 },
        3: { clue: 'Pearl in a pearl necklace, e.g.', answer: 'WORLD', row: 0, col: 1 },
        4: { clue: 'Bit of land in the ocean', answer: 'ISLE', row: 0, col: 4 },
        5: { clue: 'See 1-Across', answer: 'SABI', row: 1, col: 0 },
    },
} as const;

export const data2 = {
    across: {
        1: { clue: 'The present', answer: 'TODAY', row: 0, col: 0 },
        6: { clue: 'Its Speedmaster model, worn by Buzz Aldrin, was the first watch on the moon', answer: 'OMEGA', row: 1, col: 0 },
        7: { clue: 'Squiggly Japanese noodles', answer: 'RAMEN', row: 2, col: 0 },
        8: { clue: 'Strip on a flip-flop', answer: 'THONG', row: 3, col: 0 },
        9: { clue: 'What "Eat" represents in the mnemonic "Never Eat Shredded Wheat"', answer: 'EAST', row: 4, col: 0 },
    },
    down: {
        1: { clue: 'Rich, dense cake', answer: 'TORTE', row: 0, col: 0 },
        2: { clue: 'Midwest city where Berkshire Hathaway is headquartered', answer: 'OMAHA', row: 0, col: 1 },
        3: { clue: 'Trial versions', answer: 'DEMOS', row: 0, col: 2 },
        4: { clue: 'Literary representative', answer: 'AGENT', row: 0, col: 3 },
        5: { clue: 'Bowen of "Saturday Night Live"', answer: 'YANG', row: 0, col: 4 },
    },
} as const;

export const data3 = {
    across: {
        1: { clue: '"More ___ you\'ll ever know"', answer: 'THAN', row: 0, col: 1 },
        5: { clue: 'Divine favor, in Christianity', answer: 'GRACE', row: 1, col: 0 },
        6: { clue: 'Sisters who might be sitters', answer: 'AUNTS', row: 2, col: 0 },
        7: { clue: 'Portly-sounding beer', answer: 'STOUT', row: 3, col: 0 },
        8: { clue: 'Cool and stylish', answer: 'HIP', row: 4, col: 1 },
    },
    down: {
        1: { clue: '"The ___ will set you free. But not until it is finished with you": David Foster Wallace', answer: 'TRUTH', row: 0, col: 1 },
        2: { clue: 'Capital of Vietnam', answer: 'HANOI', row: 0, col: 2 },
        3: { clue: 'Misbehave', answer: 'ACTUP', row: 0, col: 3 },
        4: { clue: 'Prepare for a new baby, say', answer: 'NEST', row: 0, col: 4 },
        5: { clue: 'Fuel for some stoves', answer: 'GAS', row: 1, col: 0 },
    },
} as const;

const crosswordDataArray = [data, data2, data3];

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
