console.log("Connected");


// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical.Make it case insensitive.
//     Examples
// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
// match("venom", "VENOM") ➞ true
// match("mask", "mAskinG") ➞ false
// Notes
// Don't forget to return the result.
// You can use javascript build function toLowerCase

function match(string1, string2) {
    if (string1.toLowerCase() === string2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
