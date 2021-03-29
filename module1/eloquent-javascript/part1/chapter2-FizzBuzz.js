/*
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*
*/

for (let index = 1; index <= 100; index++) {
    let fizz="", buzz="";
    if(index % 3 == 0) fizz = "Fizz"; //Anotation for future "it is not the same to say THIS.FIZZ="aaa" than FIZZ="aaaa"
    if(index % 5 == 0) buzz = "Buzz";
    console.log(index,fizz + buzz)
}
