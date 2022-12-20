// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height,
//  and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

//     Examples
// hurdleJump([1, 2, 3, 4, 5], 5) ➞ true
// hurdleJump([5, 5, 3, 4, 5], 3) ➞ false
// hurdleJump([5, 4, 5, 6], 10) ➞ true
// hurdleJump([1, 2, 1], 1) ➞ false
// Notes
// Don't forget to return the result.
// Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

function hurdleJump(array, number) {
    let max = array[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (number >= max) {
            return true;
        }
    }
    return false;
}
console.log(hurdleJump([1, 2, 3, 4, 5], 5));
console.log(hurdleJump([5, 5, 3, 4, 5], 3));
console.log(hurdleJump([5, 4, 5, 6], 10));
console.log(hurdleJump([1, 2, 1], 1));