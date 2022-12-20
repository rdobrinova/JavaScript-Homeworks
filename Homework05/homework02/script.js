// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that
// checks if a number is a valid number and call it for every number.If
//  one of the numbers of the array is invalid show an error message instead of a result.


function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        // result = result + array[i];
        let isValid = validateNumber(array[i]);
        if (!isValid) {
            return `${array[i]} is not the valid number`;
        }
        result += array[i];
    }
    return result;
}


function validateNumber(num) {
    if (typeof (num) !== "number") {
        return false;
    }
    return true;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sumArray([1, 2, "a", 4, 5]));


