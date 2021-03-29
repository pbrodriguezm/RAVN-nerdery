//Call backs
const operations = (number1: number, number2: number, cb: (result: number) => void) => {
    let result = number1 + number2;
    cb(result);
}

operations(2, 3, (result) => {
    console.log('Result:', result);
})




/////Ambient modules
import { cube } from 'cube'; 
cube(5);

//third party type
//import $ from 'jquery';



//ambient modules
declare module 'cube' {
    export function cube(): string;
}