/*
Create a new index99.js file
Add all even numbers bettwen 0 and 1000 using for statement
The iteration must break after finding the first 20 even numbers
Show the result as output
*/

let sum = null;

for (let number = 0; number <= 1000; number += 2) {
    if (number / 2 >= 20) {
        break;
    } else {
        sum += number;
    }
}

console.log(`The sum of first 20 even numbers between 0 and 1000 is ${sum}.`);