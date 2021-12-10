import {readFileSync} from "fs";

const heights: number[] = readFileSync('./Day9/input.txt', 'utf-8').replace(/\r?\n|\r/g, "").split('').map(Number);

interface HeightCompass {
    up: number | null,
    down: number | null,
    left: number | null,
    right: number |null,
    self: number,
    lowest: number,
    map: boolean
}

function spliceIntoChunks(arr: number[], chunkSize: number) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const chunks = spliceIntoChunks(heights, 100)

let heightMap: HeightCompass[] = [];
let lowPointMap: number[] = [];
for (let row = 0; row < chunks.length; row++) {
    let heightRow = chunks[row];
    for (let heightIndex = 0; heightIndex < heightRow.length; heightIndex++) {
        let self = heightRow[heightIndex];
        let up = null;
        let down = null;
        let left = null;
        let right = null;
        let map = false;

        let doubleMatch = false;

        let numbers: number[] = [self];

        if (chunks[row - 1] !== undefined && chunks[row - 1][heightIndex] !== undefined) {
            up = chunks[row - 1][heightIndex];
            numbers.push(up);
            if (self === up) {
                doubleMatch = true;
            }
        }

        if (chunks[row + 1] !== undefined && chunks[row + 1][heightIndex] !== undefined) {
            down = chunks[row + 1][heightIndex];
            numbers.push(down);
            if (self === down) {
                doubleMatch = true;
            }
        }

        if (heightRow[heightIndex - 1] !== undefined) {
            left = heightRow[heightIndex - 1];
            numbers.push(left);
            if (self === left) {
                doubleMatch = true;
            }
        }

        if (heightRow[heightIndex + 1] !== undefined) {
            right = heightRow[heightIndex + 1];
            numbers.push(right);
            if (self === right) {
                doubleMatch = true;
            }
        }

        // cant be the lowest if another point is equal
        const lowest = Math.min(...numbers);
        if (!doubleMatch) {
            if (self === lowest) {
                lowPointMap.push(self + 1);
                map = true;
            }
        }

        heightMap.push({
            up,
            down,
            left,
            right,
            self,
            lowest,
            map
        });
    }
}

const arrSum = (lowPointMap: number[]) => lowPointMap.reduce((a: number, b: number) => a + b, 0)
console.log(arrSum(lowPointMap));
