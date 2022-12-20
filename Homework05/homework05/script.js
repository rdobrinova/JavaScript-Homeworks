// HOMEWORK #5
// Title: Looping structures
// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it


function validateNumber(num) {
    if (typeof (num) !== "number") {
        return false;
    }
    return true;
}

function minMaxSum(array) {
    let max = array[1];
    let min = array[1];
    for (let i = 0; i < array.length; i++) {
        let isValid = validateNumber(array[i]);
        if (!isValid) {
            continue;
        }
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("Max:" + max + " Min:" + min + " Sum:" + (max + min));
}
minMaxSum([3, 5, 6, true, 8, "a", 11,]);