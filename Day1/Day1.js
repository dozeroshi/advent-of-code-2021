"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var text = (0, fs_1.readFileSync)("./input-number-draws.txt", 'utf-8');
var depthsArray = text.split("\n");
var previousMeasure = 0;
var countOfIncreases = 0;
depthsArray.forEach(function (depth) {
    var numberDepth = parseInt(depth);
    if (previousMeasure !== 0 && numberDepth > previousMeasure) {
        countOfIncreases++;
    }
    previousMeasure = numberDepth;
});
console.log(countOfIncreases);
