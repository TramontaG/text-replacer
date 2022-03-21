"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replaceMap = function (srcString, map) {
    var result = srcString;
    Object.keys(map).forEach(function (key) {
        var srcSubstring = key;
        var targetString = map[key];
        var indexes = findChangeIndexes(srcString, srcSubstring);
        var target = typeof targetString === 'string' ? targetString : getRandomStringFromArray(targetString);
        result = singleReplacement({
            srcString: result,
            srcSubstring: srcSubstring,
            indexes: indexes,
            targetString: target,
        });
    });
    return result;
};
var findChangeIndexes = function (srcString, substring) {
    var indexes = [];
    if (!srcString.includes(substring))
        return indexes;
    if (substring.length === 0 || srcString.length === 0)
        return indexes;
    var currString = srcString;
    while (currString.includes(substring)) {
        var lastOcurrence = indexes[indexes.length - 1] + substring.length || 0;
        var ocurrenceIndex = currString.indexOf(substring);
        indexes.push(ocurrenceIndex + lastOcurrence);
        currString = currString.slice(ocurrenceIndex + substring.length);
    }
    return indexes;
};
var singleReplacement = function (_a) {
    var srcString = _a.srcString, srcSubstring = _a.srcSubstring, targetString = _a.targetString, indexes = _a.indexes;
    var resultString = '';
    var currIndex = 0;
    indexes.forEach(function (index) {
        resultString += srcString.substring(currIndex, index) + targetString;
        currIndex = index + targetString.length + (srcSubstring.length - targetString.length);
    });
    resultString += srcString.substring(currIndex);
    return resultString;
};
var getRandomStringFromArray = function (arr) {
    var randomIndex = Math.round(Math.random() * (arr.length - 1));
    return arr[randomIndex];
};
exports.default = replaceMap;
