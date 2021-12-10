import { readFileSync } from 'fs';

const text = readFileSync("./input-number-draws.txt", 'utf-8');
const depthsArray = text.split("\n")

const calculateIncreases = (input: string[]) => {
    let previousMeasure = 0;
    let countOfIncreases = 0;
    input.forEach((depth: string) => {
        const depthNum = parseInt(depth);
        if (previousMeasure !== 0 && depthNum > previousMeasure) {
            countOfIncreases++;
        }
        previousMeasure = depthNum;
    });
    return countOfIncreases;
}

const calculateSlidingIncreases = (input: string[]) => {
    let bucket: string[] = [];
    depthsArray.forEach((depth: string, index: number) => {
        let numberDepth = parseInt(depth);
        let nextDepth = parseInt(depthsArray[index + 1]);
        let finalDepth = parseInt(depthsArray[index + 2]);
        bucket.push(String(numberDepth + nextDepth + finalDepth));
    });
    return calculateIncreases(bucket);
}

// Problem 1
console.log(calculateIncreases(depthsArray));
// Problem 2
console.log(calculateSlidingIncreases(depthsArray));
