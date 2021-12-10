import {inputSplitRetriever} from "../utilities";

const numberDraws: number[] = inputSplitRetriever('./Day4/input-number-draws.txt', ',').map(Number);
const bingoBoards: number[][][] = inputSplitRetriever('./Day4/input-boards.txt', /\n{2,}/).map((row: string, index: number) => {
        return row.trim().split(/\n+/).map(single => {
                return single.trim().split(/\s+/).map(Number);
        })
});

const hasBoardWon = (board: number[][]): boolean => {
        for (let i = 0; i < board.length; i++) {
                const sum = board[i].reduce(reducer, 0);
                if (sum === -5) {
                        return true;
                }

                let column: number[] = [];
                for (let j = 0; j < board.length; j++) {
                        column.push(board[i][i + j]);
                }
                const colSum = column.reduce(reducer, 0);
                if (colSum === -5) {
                        return true;
                }
        }

        return false;
}

const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;

const WinningRounds: number[] = [];

const runBoard = (board: number[][]) => {
        for(let i = 0; i <= numberDraws.length; i++) {
                let number = numberDraws[i];
                for (let t = 0; t < board.length; t++) {
                        let numberRow = board[t];
                        numberRow = replaceItem(numberRow, number);
                        if (hasBoardWon(board)) {
                                WinningRounds.push(i);
                                return board;
                        }
                }
        }
        return -1;
}

const runGame = () => {
        for (let k = 0; k < bingoBoards.length; k++) {
                let board = bingoBoards[k];
                runBoard(board);
        }
}

function replaceItem(arr: number[], value: number): number[] {
        const index = arr.indexOf(value);
        if (index > -1) {
                arr[index] = -1;
        }
        return arr;
}

runGame();
const winningBoardRound = Math.min(...WinningRounds);
let winningBoardIndex = WinningRounds.indexOf(winningBoardRound)
let winningBoard = bingoBoards[winningBoardIndex];
let winningNumber = numberDraws[winningBoardIndex];
let result = winningBoard.flat().map(Number).filter((number: number) => { return number !== -1});
const sum = result.reduce(reducer, 0);
console.log(sum * winningNumber);

