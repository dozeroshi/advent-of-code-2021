"use strict";
exports.__esModule = true;
exports.inputSplitRetriever = exports.inputRetriever = exports.binaryToDecimal = void 0;
var fs_1 = require("fs");
var binaryToDecimal = function (binary) {
    return parseInt(binary, 2);
};
exports.binaryToDecimal = binaryToDecimal;
var inputRetriever = function (location, split) {
    if (split === void 0) { split = null; }
    var output = (0, fs_1.readFileSync)(location, 'utf-8');
    if (split !== null) {
        return output.split(split);
    }
    return output;
};
exports.inputRetriever = inputRetriever;
var inputSplitRetriever = function (location, split) {
    var output = (0, fs_1.readFileSync)(location, 'utf-8').split(split);
    return output;
};
exports.inputSplitRetriever = inputSplitRetriever;
