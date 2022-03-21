"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepLog = void 0;
var util_1 = __importDefault(require("util"));
var deepLog = function (obj) {
    return console.log(util_1.default.inspect(obj, {
        colors: true,
        breakLength: 120,
        showHidden: true,
        compact: false,
        depth: null,
    }));
};
exports.deepLog = deepLog;
