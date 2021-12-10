"use strict";
exports.__esModule = true;
var utilities_1 = require("../utilities");
var numberDraws = (0, utilities_1.inputSplitRetriever)('./Day4/input-number-draws.txt', ',').map(Number);
var bingoBoards = (0, utilities_1.inputSplitRetriever)('./Day4/input-boards.txt', /\n{2,}/).map(function (row, index) {
    return row.trim().split(/\n+/).map(function (single) {
        return single.trim().split(/\s+/).map(Number);
    });
});
var hasBoardWon = function (board) {
    for (var i = 0; i < board.length; i++) {
        var sum = board[i].reduce(reducer, 0);
        if (sum === -5) {
            return true;
        }
    }
    return false;
};
var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
var WinningRounds = [];
var runBoard = function (board) {
    for (var i = 0; i <= numberDraws.length; i++) {
        var number = numberDraws[i];
        for (var t = 0; t < board.length; t++) {
            var numberRow = board[t];
            numberRow = replaceItem(numberRow, number);
            if (hasBoardWon(board)) {
                console.log("Board has won!");
                return i;
            }
        }
    }
    return -1;
};
for (var k = 0; k < bingoBoards.length; k++) {
    var board = bingoBoards[k];
    var winningRound = runBoard(board);
    WinningRounds.push(winningRound);
}
var lastNumber = 0;
// const findWinnerAlt = () => {
//         for(let i = 0; i <= numberDraws.length; i++) {
//                 let number = numberDraws[i];
//                 for (let k = 0; k < bingoBoards.length; k++) {
//                         let singleBoard = bingoBoards[k];
//                         for (let t = 0; t < singleBoard.length; t++) {
//                                 let numberRow = singleBoard[t];
//                                 numberRow = replaceItem(numberRow, number);
//                                 if (hasBoardWon(singleBoard)) {
//                                         console.log("Board has won!");
//                                         lastNumber = number;
//                                         return bingoBoards[k];
//                                 }
//                         }
//                 }
//         }
//
//         const failed: string[][] = [[]];
//         return failed;
// }
function replaceItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr[index] = -1;
    }
    return arr;
}
console.log(WinningRounds);
//
// let preResult = findWinnerAlt();
// let result = preResult.flat().map(Number).filter((number: number) => { return number !== -1});
// const sum = result.reduce(reducer, 0);
//
// console.log(sum * lastNumber);
