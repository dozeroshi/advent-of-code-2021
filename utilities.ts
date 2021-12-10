import {readFileSync} from "fs";

export const binaryToDecimal = (binary: string) => {
    return parseInt(binary, 2);
}

export const inputRetriever = (location: string, split: string | RegExp | null = null) => {
    const output = readFileSync(location, 'utf-8');
    if (split !== null) {
        return output.split(split);
    }
    return output;
}

export const inputSplitRetriever = (location: string, split: string | RegExp) => {
    const output: string[] = readFileSync(location, 'utf-8').split(split);
    return output;
}
