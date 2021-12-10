import { binaryToDecimal } from '../utilities';
import {readFileSync} from "fs";

interface BinaryMode {
    positionOn: number,
    positionOff: number
}

interface BinaryMap {
    bit1: BinaryMode,
    bit2: BinaryMode,
    bit3: BinaryMode,
    bit4: BinaryMode,
    bit5: BinaryMode,
    bit6: BinaryMode,
    bit7: BinaryMode,
    bit8: BinaryMode,
    bit9: BinaryMode,
    bit10: BinaryMode,
    bit11: BinaryMode,
    bit12: BinaryMode,
}

const calculateGamma = (state: BinaryMap) => {
    let GammaBitString = '';
    Object.keys(state).forEach((bitIndex: string) => {
        // @ts-ignore
        GammaBitString += state[bitIndex].positionOn > state[bitIndex].positionOff ? 1 : 0;
    })
    return GammaBitString;
}

const calculateEpsilon = (state: BinaryMap) => {
    let EpsilonString = '';
    Object.keys(state).forEach((bitIndex: string) => {
        // @ts-ignore
        EpsilonString += state[bitIndex].positionOn < state[bitIndex].positionOff ? 1 : 0;
    })
    return EpsilonString;
}

const calculateOxygenGenerationRating = (state: BinaryMap) => {

}

const calculateCO2ScrubberRating = (state: BinaryMap) => {

}

const constructBinaryMap = () => {
    let defaultBinaryMode: BinaryMode = { positionOn: 0, positionOff: 0 };
    let PowerConsumptionState: BinaryMap = {
        bit1: defaultBinaryMode,
        bit2: { ...defaultBinaryMode},
        bit3: { ...defaultBinaryMode},
        bit4: { ...defaultBinaryMode},
        bit5: { ...defaultBinaryMode},
        bit6: { ...defaultBinaryMode},
        bit7: { ...defaultBinaryMode},
        bit8: { ...defaultBinaryMode},
        bit9: { ...defaultBinaryMode},
        bit10: { ...defaultBinaryMode},
        bit11: { ...defaultBinaryMode},
        bit12: { ...defaultBinaryMode},
    }

    const diagnosticReport: string[] = readFileSync('./Day3/input-number-draws.txt', 'utf-8').split(/\n+/);
    const propNameBase = "bit";
    diagnosticReport.forEach((binary:string) => {
        let bits: string[] = binary.split('');
        if (bits.length === 0) {
            return PowerConsumptionState;
        }
        for (let i = 0; i <= bits.length; i++) {
            let bitId: string = propNameBase + (i + 1);
            let bitNum = parseInt(bits[i]);
            if (!isNaN(bitNum)) {
                // @ts-ignore
                bitNum === 1 ? PowerConsumptionState[bitId].positionOn++ : PowerConsumptionState[bitId].positionOff++;
            }
        }
    });
    return PowerConsumptionState;
}

const main = () => {
    const State = constructBinaryMap();
    console.log(binaryToDecimal(calculateGamma(State)) * binaryToDecimal(calculateEpsilon(State)));
}

main();
