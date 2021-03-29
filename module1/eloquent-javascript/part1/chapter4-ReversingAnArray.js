/* 
* write two functions, reverseArray and reverseArrayInPlace
* The first, reverseArray, takes an array as argument and produces a new array that has the same elements
* in the inverse order. The second, reverseArrayInPlace, does what the reverse method 
* does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method 
*/

function reverseArray(array) {
    let resultArray=[];
    for (let index = array.length-1; index >= 0; index--) {
         resultArray.push(array[index])
        
    }
    return resultArray;
    
}

function reverseArrayInPlace(array) {
    let indexIni=0;
    let valueTemp;
    for (let index = array.length-1; index >= array.length/2; index--) {
        valueTemp=array[indexIni];
        array[indexIni]=array[index]; //value initial is changed for final value
        array[index]=valueTemp;
        indexIni++;
        
   }
    return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]