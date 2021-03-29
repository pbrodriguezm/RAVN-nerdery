/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard 
 */
let dimention=8
for (let indexCol = 0; indexCol < dimention; indexCol++) {
     let row="";
     for (let indexRow = 0; indexRow < 8; indexRow++) {
         if((indexCol % 2 !=0 && indexRow % 2 != 0) || (indexCol % 2 ==0 && indexRow % 2 == 0)) row+=' '; 
         if((indexCol % 2 !=0 && indexRow % 2 == 0) || (indexCol % 2 ==0 && indexRow % 2 != 0) ) row+='#';
     }
     console.log(row);
 }