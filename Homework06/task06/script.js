// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

//     Examples
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.
// diffMaxMin([44, 32, 86, 19]) ➞ 67
// // Smallest number is 19, biggest is 86.
// Notes
// Don't forget to return the result.
// Try using Infinity and - Infinity


function diffMaxMin(array) {
    let max = array[1];
    let min = array[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log((max - min));
}
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
diffMaxMin([44, 32, 86, 19]);
