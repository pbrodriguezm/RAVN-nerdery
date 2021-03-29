"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
let sum = add(5, 10);
console.log(sum);
// console.log('22');
//import * as data from '../src/data.json';
const data_json_1 = __importDefault(require("./data.json"));
// //const config = require("./data.json");
const word = data_json_1.default;
console.log(data_json_1.default); // output 'testing'
// // //let TempProcessList:any = []
function processReadings(readings) {
}
//# sourceMappingURL=app.js.map