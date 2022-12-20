// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.
// Negating a positive value - +n will return -n, because all + 's are removed.
// Negating a negative value--n will return n, because the first - turns the second minus into a +.
//     Examples
// negate([1, 2, 3, 4]) ➞[-1, -2, -3, -4]
// negate([-1, 2, -3, 4]) ➞[1, -2, 3, -4]
// negate([]) ➞[]
// Notes
// Don't forget to return the result.
// If you get an empty array, return an empty array: []

function negate(array) {
    let negativeArray = [];
    for (let i = 0; i < array.length; i++) {
        negativeArray.push(-array[i]);
    }
    return negativeArray;
}
console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]));