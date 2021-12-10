import {readFileSync} from "fs";

const horizontalPos: number[] = readFileSync('./Day7/input.txt', 'utf-8').split(',').map((pos: string) => {
    return parseInt(pos);
});

const moveToPos = (endPos: number) => {
    let fuelCost: number = 0;
    horizontalPos.forEach((hozPos: number) => {

        if (hozPos !== endPos) {
            let rootFuelCost = hozPos > endPos ? hozPos - endPos : endPos - hozPos;
            fuelCost += rootFuelCost;
            for (let f = 1; f < rootFuelCost; f++) {
                fuelCost += f;
            }
        }
    });
    return fuelCost;
}

const main = () => {
    const highestPos = Math.max(...horizontalPos);
    const lowestPos = Math.min(...horizontalPos);

    let lastCost = 9999999;
    let lowestCost = 0;
    for (let i = lowestPos; i <= highestPos; i++) {
        let currCost = moveToPos(i);
        if (currCost < lastCost) {
            lowestCost = currCost;
        }
        lastCost = currCost;
    }

    console.log(lowestCost);
}

main();

