console.log("Connected");

// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either
//  true or false depending on whether the total number of characters in the
//  first string is equal to the total number of characters in the second string.

//     Examples
// compare("AB", "CD") ➞ true
// compare("ABC", "DE") ➞ false
// compare("hello", "sedc") ➞ false
// Notes
// Don't forget to return the result.
// You can find more about the Length property.



function compare(argument1, argument2) {
    if (argument1.length === argument2.length) {
        return console.log(true);
    } else {
        return console.log(false);
    }

}
compare("AB", "CD");
compare("ABC", "DE");
compare("hello", "sedc");