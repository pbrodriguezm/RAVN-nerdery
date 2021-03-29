import data from './data.json'

let processMapTemp = new Map();

function processReadings(readings: TemperatureReading[]): void {
    readings.forEach(reading => {
        if (!processMapTemp.has(reading.city)) {
            processMapTemp.set(reading.city, [reading])
        } else {
            let temp: TemperatureReading[] = processMapTemp.get(reading.city);
            processMapTemp.set(reading.city, temp.concat([reading]))
        }
    });
}

function getTemperatureSummary(date: string, city: string): TemperatureSummary {
    //filter city
    let foundElements: TemperatureReading[] = processMapTemp.get(city);

    //filter date
    foundElements = foundElements.filter(e => {if (e.time.toString() == date) return e; }); 
  
    if(foundElements.length == 0) return null;

    let result: TemperatureSummary = {};

    result.first = foundElements.reduce((previous, next) => previous.time < next.time ? previous : next).temperature;

    result.last = foundElements.reduce((previous, next) => previous.time > next.time ? previous : next).temperature;

    result.high = foundElements.reduce((previous, next) => previous.temperature > next.temperature ? previous : next).temperature;

    //Other method
    result.low = foundElements.reduce((previous, next) => {
        if (previous.temperature < next.temperature) return previous;
        return next;
    }).temperature;

    //other metod two, force change oundElement.temperature to number
    let avgTotal = 0;
    foundElements.forEach(foundElement => {
        avgTotal += (+foundElement.temperature);
    });
    result.average = avgTotal / foundElements.length;

    return result;
}


let tempProcessList: TemperatureReading[] = JSON.parse(JSON.stringify(data));
processReadings(tempProcessList);

//result elements
console.log(getTemperatureSummary('18/02/2021', 'Grand Island'));



interface TemperatureReading {
    time?: Date;
    temperature?: number;
    city?: string;
}

interface TemperatureSummary {
    first?: number;
    last?: number;
    high?: number;
    low?: number;
    average?: any;
}