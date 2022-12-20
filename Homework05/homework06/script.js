// HOMEWORK #6
// Title: Looping structures
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames
// will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function combineName(firstNames, lastNames) {
    let full = [];
    for (let i = 0; i < firstNames.length; i++) {
        let student = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
        full.push(student);
    }
    return full;
}
let result = combineName(["Bob", "Jill"], ["Gregory", "Wurtz"]);
console.log(result);