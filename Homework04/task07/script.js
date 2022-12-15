console.log("Connected");


// Task 7: Is the Word Singular or Plural ?
// Create a function that takes in a word 
// and determines whether or not it is plural.
// A plural word is one that ends in "s".
//         Examples
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false
// Notes
// Don't forget to return the result.
// Remember that return true(boolean) is not the same as return "true"(string).
// You can use javascript build function EndsWith


function isPlural(word) {
    if (word.endsWith("s")) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");