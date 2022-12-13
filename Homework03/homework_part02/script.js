console.log("Connected");

// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function dogAge(age) {
	let result = age * 7;
	return result;
}
let result = dogAge(5);
console.log("Dog have " + result + " dog years");

// BONUS
function humanAge(age1) {
	let result1 = age1 / 7;
	return result1;
}
let result1 = humanAge(14);
console.log("Dog have " + result1 + " human years");
