// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.
//     Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// Don't forget to return the result.
// The first element in an array always has an index of 0.
// Thry using the build in function Shift



function getFirstValue(array) {
    let firstElement = array.shift();
    return firstElement;
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));