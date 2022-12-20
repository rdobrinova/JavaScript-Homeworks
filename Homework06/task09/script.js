// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of 
// numbers counting down from this number to zero.
//     Examples
// countdown(5) ➞[5, 4, 3, 2, 1, 0]
// countdown(1) ➞[1, 0]
// countdown(0) ➞[0]
// Notes
// Don't forget to return the result.
// The argument will always be greater than or equal to zero.

function countdown(startNum) {
    let emptyArray = [];
    for (let i = startNum; i >= 0; i--) {
        emptyArray.push(i);
    }
    return emptyArray;
}
console.log(countdown(5));
console.log(countdown(1));
console.log(countdown(0)); 
