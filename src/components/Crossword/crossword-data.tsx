import styled from 'styled-components';


export const Page = styled.div`
padding: 2em;
`;

export const Header = styled.h1`
margin-bottom: 1em;
`;

export const Commands = styled.div``;

export const Command = styled.button`
margin-right: 1em;
`;

export const CrosswordMessageBlock = styled.div`
margin: 0 auto; /* Horizontal centering */
display: flex;
justify-content: center; /* Centering items horizontally */
align-items: center; /* Centering items vertically */
margin: 2em 0 4em;
display: flex;
gap: 2em;
max-height: 20em;
`;

export const CrosswordWrapper = styled.div`
max-width: 30em;

/* and some fun making use of the defined class names */
.crossword.correct {
rect {
stroke: rgb(100, 200, 100) !important;
}
svg > rect {
fill: rgb(100, 200, 100) !important;
}
text {
fill: rgb(100, 200, 100) !important;
}
}

.clue.correct {
::before {
content: '\u2713'; /* a.k.a. checkmark: ✓ */
display: inline-block;
text-decoration: none;
color: rgb(100, 200, 100);
margin-right: 0.25em;
}

text-decoration: line-through;
color: rgb(130, 130, 130);
}
`;

export const CrosswordProviderWrapper = styled(CrosswordWrapper)`
max-width: 50em;
display: flex;
gap: 1em;

.direction {
width: 10em;

.header {
    margin-top: 0;
}
}

.grid {
width: 10em;
}
`;

export const IpuzWrapper = styled(CrosswordProviderWrapper)`
max-width: 100%;
.direction {
width: 25em;
}
`;

export const Messages = styled.pre`
flex: auto;
background-color: rgb(230, 230, 230);
margin: 0;
padding: 1em;
overflow: auto;
`;

export const data = {
across: {
    1: {
    clue: 'one plus one',
    answer: 'TWO',
    row: 0,
    col: 0,
    },
},
down: {
    2: {
    clue: 'three minus two',
    answer: 'ONE',
    row: 0,
    col: 2,
    },
},
};




export const ipuzData = {
origin: 'ipuz example puzzle (from Puzzazz)',
version: 'http://ipuz.org/v1',
kind: ['http://ipuz.org/crossword#1'],
copyright: '2011 Puzzazz',
author: 'Roy Leban',
publisher: 'Puzzazz, Inc.',
title: 'High-Tech Mergers',
intro:
    'Solve the puzzle, then anagram the circled letters to find an appropriate word.',
difficulty: 'Easy',
empty: '0',
dimensions: { width: 15, height: 15 },

puzzle: [
    [1, 2, 3, 4, 5, '#', 6, 7, 8, '#', 9, 10, 11, 12, 13],
    [14, 0, 0, 0, 0, '#', 15, 0, 0, '#', 16, 0, 0, 0, 0],
    [
    17,
    0,
    0,
    0,
    { cell: 0, style: { shapebg: 'circle' } },
    18,
    0,
    { cell: 0, style: { shapebg: 'circle' } },
    0,
    '#',
    19,
    0,
    0,
    0,
    0,
    ],
    [
    20,
    0,
    0,
    '#',
    21,
    0,
    0,
    0,
    0,
    22,
    '#',
    { cell: 23, style: { shapebg: 'circle' } },
    0,
    0,
    0,
    ],
    ['#', '#', '#', 24, 0, 0, '#', 25, 0, 0, 26, 0, 0, 0, 0],
    [27, 28, 29, 0, 0, 0, 30, '#', 31, 0, 0, 0, '#', '#', '#'],
    [32, 0, 0, 0, 0, 0, 0, 33, '#', '#', 34, 0, 35, 36, 37],
    [
    38,
    0,
    0,
    { cell: 0, style: { shapebg: 'circle' } },
    '#',
    39,
    0,
    0,
    40,
    41,
    '#',
    { cell: 42, style: { shapebg: 'circle' } },
    0,
    0,
    0,
    ],
    [43, 0, 0, 0, 44, '#', '#', 45, 0, 0, 46, 0, 0, 0, 0],
    ['#', '#', '#', 47, 0, 48, 49, '#', 50, 0, 0, 0, 0, 0, 0],
    [51, 52, 53, 0, 0, 0, 0, 54, '#', 55, 0, 0, '#', '#', '#'],
    [56, 0, 0, 0, '#', 57, 0, 0, 58, 0, 0, '#', 59, 60, 61],
    [
    62,
    0,
    0,
    { cell: 0, style: { shapebg: 'circle' } },
    63,
    '#',
    64,
    0,
    { cell: 0, style: { shapebg: 'circle' } },
    0,
    0,
    { cell: 65, style: { shapebg: 'circle' } },
    0,
    0,
    0,
    ],
    [66, 0, 0, 0, 0, '#', 67, 0, 0, '#', 68, 0, 0, 0, 0],
    [69, 0, 0, 0, 0, '#', 70, 0, 0, '#', 71, 0, 0, 0, 0],
],

clues: {
    Across: [
    [1, 'Launches, as a software product'],
    [6, 'Villain in "Tron"'],
    [9, 'Separated'],
    [14, "Drew Barrymore's great aunt"],
    [15, 'Inventor Whitney'],
    [16, 'Skywalker'],
    [17, 'Jungle heat?'],
    [19, 'Theatre that always had standing room'],
    [20, "Law prof.'s degree"],
    [21, 'Canadian $2 coin, familiarly'],
    [23, 'CEO types'],
    [24, 'Scanner or font term'],
    [25, 'Memphis cheer'],
    [27, 'Head south for the winter'],
    [31, 'Zilch, in Veracruz'],
    [32, 'Simon and Garfunkel hit of 1966'],
    [34, 'Parts of a procedure'],
    [38, 'Bygone compression company'],
    [39, 'What Jack Sprat ate?'],
    [42, 'Big name in art deco'],
    [43, 'Net wt. of a big bag of flour'],
    [45, 'Sideways, as a way of walking'],
    [47, 'Recedes'],
    [50, 'Hawaii has hundreds'],
    [51, 'First piece of evidence'],
    [55, '"For example..."'],
    [56, 'Indian flatbread'],
    [57, 'Clothing and skate shop chain'],
    [59, 'The M in MP3 does not stand for this: abbr.'],
    [62, 'Put together'],
    [64, 'Fruity valley?'],
    [66, 'Garden tools'],
    [67, 'Famous Speedwagon'],
    [68, 'Alfa follower'],
    [69, 'Rejoice'],
    [70, "Communicator for those who can't hear: abbr."],
    [71, 'Win all the games'],
    ],

    Down: [
    [1, 'The United States has a great one'],
    [2, 'Language of the web'],
    [3, '"___ no idea!"'],
    [4, 'Candy that might be given out by a cartoon head'],
    [5, "Kid's racer"],
    [6, 'Prefix with -zoic, meaning middle'],
    [7, 'Adhered (to)'],
    [8, "Rack's partner in cars"],
    [9, "Pitcher's or student's stat: abbr."],
    [10, 'Tropical entrance?'],
    [11, 'Acrobat company'],
    [12, 'Construction rod'],
    [13, 'A braid'],
    [18, 'Last name in security software'],
    [22, 'It comes between zeta and theta'],
    [24, "Seer's info?"],
    [26, "They're checked in bars"],
    [27, 'Fine spray'],
    [28, '"I can\'t believe ___ the whole thing!"'],
    [
        29,
        'Nickname for an FBI agent, as popularized in the 1959 movie "The FBI Story"',
    ],
    [30, 'Environmental prefix'],
    [33, 'Fast food chain that added grills in 2009'],
    [35, 'Ms. Brockovich'],
    [36, 'Anxiety syndrome associated with veterans: abbr.'],
    [37, 'Meets with'],
    [40, 'Former White House press secretary  Fleischer'],
    [41, 'Dangler at a graduation'],
    [44, 'Consumer protection grp. with the slogan "Start With Trust"'],
    [46, "Portland's team, for short"],
    [48, 'Alternative to .com'],
    [49, 'Little mouse'],
    [51, 'Habituate'],
    [52, 'Anti-anxiety drug (sometimes used to treat 36-Down)'],
    [
        53,
        "Dancing off the page / Pleasant as a Summer breeze / It's a short poem",
    ],
    [54, 'Pumped up the volume'],
    [58, 'Shuffle or Classic'],
    [59, 'I Can Has Cheezburger is all about one'],
    [60, '"___\'s Gold" (Peter Fonda flick of 1997)'],
    [61, 'Feed for the pigs'],
    [63, 'Approx.'],
    [65, 'Stock market benchmark, with "The"'],
    ],
},

solution: [
    ['S', 'H', 'I', 'P', 'S', '#', 'M', 'C', 'P', '#', 'A', 'P', 'A', 'R', 'T'],
    ['E', 'T', 'H', 'E', 'L', '#', 'E', 'L', 'I', '#', 'V', 'A', 'D', 'E', 'R'],
    ['A', 'M', 'A', 'Z', 'O', 'N', 'S', 'U', 'N', '#', 'G', 'L', 'O', 'B', 'E'],
    ['L', 'L', 'D', '#', 'T', 'O', 'O', 'N', 'I', 'E', '#', 'M', 'B', 'A', 'S'],
    ['#', '#', '#', 'O', 'C', 'R', '#', 'G', 'O', 'T', 'I', 'G', 'E', 'R', 'S'],
    ['M', 'I', 'G', 'R', 'A', 'T', 'E', '#', 'N', 'A', 'D', 'A', '#', '#', '#'],
    ['I', 'A', 'M', 'A', 'R', 'O', 'C', 'K', '#', '#', 'S', 'T', 'E', 'P', 'S'],
    ['S', 'T', 'A', 'C', '#', 'N', 'O', 'F', 'A', 'T', '#', 'E', 'R', 'T', 'E'],
    ['T', 'E', 'N', 'L', 'B', '#', '#', 'C', 'R', 'A', 'B', 'W', 'I', 'S', 'E'],
    ['#', '#', '#', 'E', 'B', 'B', 'S', '#', 'I', 'S', 'L', 'A', 'N', 'D', 'S'],
    ['E', 'X', 'H', 'I', 'B', 'I', 'T', 'A', '#', 'S', 'A', 'Y', '#', '#', '#'],
    ['N', 'A', 'A', 'N', '#', 'Z', 'U', 'M', 'I', 'E', 'Z', '#', 'M', 'U', 'S'],
    ['U', 'N', 'I', 'T', 'E', '#', 'A', 'P', 'P', 'L', 'E', 'D', 'E', 'L', 'L'],
    ['R', 'A', 'K', 'E', 'S', '#', 'R', 'E', 'O', '#', 'R', 'O', 'M', 'E', 'O'],
    ['E', 'X', 'U', 'L', 'T', '#', 'T', 'D', 'D', '#', 'S', 'W', 'E', 'E', 'P'],
],
};