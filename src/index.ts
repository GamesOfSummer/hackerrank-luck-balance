import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function romanToInt(num: number): string {
    // step 1: create a lookup table
    const lookupTable = {
        O: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        T: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        H: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        Th: ['', 'M', 'MM', 'MMM'],
    };
    return (
        lookupTable.Th[Math.floor(num / 1000)] +
        lookupTable.H[Math.floor((num % 1000) / 100)] +
        lookupTable.T[Math.floor((num % 100) / 10)] +
        lookupTable.O[num % 10]
    );
}

consoleStart();

validateFxn(romanToInt(1), 'I');

consoleEnd();

export {};
