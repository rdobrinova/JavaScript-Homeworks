// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.
// Examples
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1
// Notes
// If the item is not present, return -1.
// Try using the build in function IndexOf


function search(array, number) {
    let indexOfItem = array.indexOf(number);
    return indexOfItem
}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));