import { getCrosswordDataByIndex } from './MiniData/miniData';
import { getCrosswordDataByIndex2 } from './MiniData/miniData2';
import { getCrosswordDataByIndex3 } from './MiniData/miniData3';
import { getCrosswordDataByIndex4 } from './MiniData/miniData4';
import { getCrosswordDataByIndex5 } from './MiniData/miniData5';
import { getCrosswordDataByIndex6 } from './MiniData/miniData6';
import { getCrosswordDataByIndex7 } from './MiniData/miniData7';
import { getCrosswordDataByIndex8 } from './MiniData/miniData8';
import { getCrosswordDataByIndex9 } from './MiniData/miniData9';
import { getCrosswordDataByIndex10 } from './MiniData/miniData10';


const crosswordDataArrays = [
    getCrosswordDataByIndex,
    getCrosswordDataByIndex2,
    getCrosswordDataByIndex3,
    getCrosswordDataByIndex4,
    getCrosswordDataByIndex5,
    getCrosswordDataByIndex6,
    getCrosswordDataByIndex7,
    getCrosswordDataByIndex8,
    getCrosswordDataByIndex9,
    getCrosswordDataByIndex10
];

export const handleMiniDataFetch = (index: number) => {
    const todaysIndex = 5;
     //Changes based on the current days Mini Crossword
    if(index === 0){
        const data = getCrosswordDataByIndex10(todaysIndex);
        return data;
    }else{
        const randomFunctionIndex = Math.floor(Math.random() * crosswordDataArrays.length);
        const getCrosswordData = crosswordDataArrays[randomFunctionIndex];
        const randomCrosswordIndex = Math.floor(Math.random() * 20);
        const data = getCrosswordData(randomCrosswordIndex);
        return data;

    }
};