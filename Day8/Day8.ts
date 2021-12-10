import { inputSplitRetriever} from "../utilities";


const part1 = () => {
    const wholeLine: string[] = inputSplitRetriever('./Day8/input.txt', /\n+/);
    const outputValues: string[] = wholeLine.map(line => { return line.split('|')[1]; });
    const input: string[] = outputValues.toString().replace(/,/g, "").trim().split(/\s/);

    const uniqueCounts = [2, 3, 4, 7];
    const uniqueSegments: string[] = [];

    input.forEach((output: string) => {
        if (uniqueCounts.includes(output.length)) {
            uniqueSegments.push(output);
        }
    });
    return uniqueSegments.length;
}

const part2 = () => {
    const wholeLine: string[] = inputSplitRetriever('./Day8/input.txt', /\n+/);
    const outputValues: string[] = wholeLine.map(line => { return line.split('|')[1]; });
    const input: string[] = outputValues.toString().replace(/,/g, "").trim().split(/\s/);

    const uniqueCounts = [2, 3, 4, 7];
    let overallTotal: number = 0;

    let counter = 0;
    let runningTotal: string = '';
    input.forEach((output: string) => {
        console.log(output);
        if (uniqueCounts.includes(output.length)) {
            switch (output.length) {
                case 2:
                    runningTotal += '1';
                    break;
                case 3:
                    runningTotal += '7';
                    break;
                case 4:
                    runningTotal += '4';
                    break;
                case 7:
                    runningTotal += '8';
                    break;
            }
        } else {
            runningTotal += String(getSignalPattern(output.split('')));
        }

        counter++;
        if (counter === 4) {
            console.log(runningTotal);
            overallTotal += parseInt(runningTotal);
            counter = 0;
            runningTotal = '';
        }

    });
    return overallTotal;
}

const getSignalPattern = (signal: string[]) => {
    const signals: string[][] = [
        ['a', 'b'],
        ['a', 'c', 'd', 'f', 'g'],
        ['a', 'b', 'c', 'd', 'f'],
        ['a', 'b', 'e', 'f'],
        ['b', 'c', 'd', 'e', 'f'],
        ['b', 'c', 'd', 'e', 'f', 'g'],
        ['a', 'b', 'd'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['a', 'b', 'c', 'd', 'e', 'f']
    ];

    signal.sort();

    for (let i = 0; i < signals.length; i++) {
        if (signals[i].toString() === signal.toString()) {
            return i + 1;
        }
    }

    return 0;
}

console.log(part1());
console.log(part2());
