// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:
// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

// console.log("Connected");

let userInput = prompt("Please enter a year");
let parsedInput = parseInt(userInput);
if (!Number.isNaN(parsedInput)) {
	let zodiacCaluclation = (parsedInput - 4) % 12;
	if (zodiacCaluclation === 0) {
		console.log("You are Rat");
	} else if (zodiacCaluclation === 1) {
		console.log("You are Ox");
	} else if (zodiacCaluclation === 2) {
		console.log("You are Tiger");
	} else if (zodiacCaluclation === 3) {
		console.log("You are Rabbit");
	} else if (zodiacCaluclation === 4) {
		console.log("You are Dragon");
	} else if (zodiacCaluclation === 5) {
		console.log("You are Snake");
	} else if (zodiacCaluclation === 6) {
		console.log("You are Horse");
	} else if (zodiacCaluclation === 7) {
		console.log("You are Goat");
	} else if (zodiacCaluclation === 8) {
		console.log("You are Monkey");
	} else if (zodiacCaluclation === 9) {
		console.log("You are Rooster");
	} else if (zodiacCaluclation === 10) {
		console.log("You are Dog");
	} else if (zodiacCaluclation === 11) {
		console.log("You are Pig");
	} else {
		console.log("Not a valid input");
	}
} else {
	console.log("Not a valid input");
}
