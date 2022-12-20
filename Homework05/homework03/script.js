// HOMEWORK #3
// Write a javascript function that:
//     When given any array of strings(should work with array with any number of elements)
// It will create one big string and return it
// Ex: ["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"



function joinArray(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || i === array.length - 1) {
            result += array[i];
        } else {
            result += " " + array[i];
        }
    }
    return result;
}
console.log(joinArray(["Hello", "there", "students", "of", "SEDC", "!"]));






