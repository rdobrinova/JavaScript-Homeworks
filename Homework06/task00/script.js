// Task 0: Create an array
// Create a function that takes an number and creates array
//  with all numbers till that number.
//     Examples
// createArray(5) ➞[1, 2, 3, 4, 5]
// createArray(10) ➞[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// createArray(-5) ➞[]
// Notes
// Don't forget to return the result.


function createArray(toNumber) {
    let array = [];
    for (let i = 1; i <= toNumber; i++) {
        array.push(i);
    }
    return array;
}
console.log(createArray(5));
console.log(createArray(10));
console.log(createArray(-5));


