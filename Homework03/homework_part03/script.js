console.log("Connected");

// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

function atm() {
	let totalCash = 1000;
	let userInput = parseInt(prompt("How much money you want to withdraw"));
	if (Number.isNaN(userInput)) {
		console.log("Not a vaid input!");
	} else {
		if (totalCash < userInput) {
			console.log("Not enough money");
		} else {
			console.log(
				"You have withdrawn " +
					userInput +
					" denars. " +
					"You still have " +
					(totalCash - userInput) +
					" denars left on your account"
			);
		}
	}
}

let result = atm();
