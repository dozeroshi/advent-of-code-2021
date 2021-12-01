import { readFileSync } from 'fs';

const text = readFileSync("./input.txt", 'utf-8');
const depthsArray = text.split("\n")

let previousMeasure = 0;
let countOfIncreases = 0;
depthsArray.forEach(depth => {
    let numberDepth = parseInt(depth);
    if (previousMeasure !== 0 && numberDepth > previousMeasure) {
        countOfIncreases++;
    }
    previousMeasure = numberDepth;
});

console.log(countOfIncreases);
