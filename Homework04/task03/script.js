console.log("Connected");

// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// Notes
// Don't forget to return the result.
// Maybe you can use some function from previous tasks.

function howManySeconds(hours) {
	let result = hours * 3600;
	return console.log(result);
}
howManySeconds(2);
howManySeconds(10);
howManySeconds(24);
