"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_json_1 = __importDefault(require("./data.json"));
var processMapTemp = new Map();
function processReadings(readings) {
    readings.forEach(function (reading) {
        if (!processMapTemp.has(reading.city)) {
            processMapTemp.set(reading.city, [reading]);
        }
        else {
            var temp = processMapTemp.get(reading.city);
            processMapTemp.set(reading.city, temp.concat([reading]));
        }
    });
}
function getTemperatureSummary(date, city) {
    //filter city
    var foundElements = processMapTemp.get(city);
    //filter date
    foundElements = foundElements.filter(function (e) { if (e.time.toString() == date)
        return e; });
    if (foundElements.length == 0)
        return null;
    var result = {};
    result.first = foundElements.reduce(function (previous, next) { return previous.time < next.time ? previous : next; }).temperature;
    result.last = foundElements.reduce(function (previous, next) { return previous.time > next.time ? previous : next; }).temperature;
    result.high = foundElements.reduce(function (previous, next) { return previous.temperature > next.temperature ? previous : next; }).temperature;
    //Other method
    result.low = foundElements.reduce(function (previous, next) {
        if (previous.temperature < next.temperature)
            return previous;
        return next;
    }).temperature;
    //other metod two, force change oundElement.temperature to number
    var avgTotal = 0;
    foundElements.forEach(function (foundElement) {
        avgTotal += (+foundElement.temperature);
    });
    result.average = avgTotal / foundElements.length;
    return result;
}
var tempProcessList = JSON.parse(JSON.stringify(data_json_1.default));
processReadings(tempProcessList);
//result elements
console.log(getTemperatureSummary('18/02/2021', 'Grand Island'));
//# sourceMappingURL=app.js.map