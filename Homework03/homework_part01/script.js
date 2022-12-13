console.log("Connected");

// Write a JavaScript function which accepts a parameter and returns
// its type and prints it in the console. Try to call the functions 5 times
// for 5 different types:
// object
// boolean
// number
// string
// undefined

function getType(parameter) {
	return typeof parameter;
}
console.log(getType({}));
console.log(getType(true));
console.log(getType(1));
console.log(getType("asd"));

let undefinedvar;
console.log(getType(undefinedvar));
