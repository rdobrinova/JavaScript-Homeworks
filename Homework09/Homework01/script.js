// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak(method)
// this method will take one parameter and will print in the console a message:
//  e.g.dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs

let firstInput = prompt("Please enter name!");
let secondInput = prompt("Please enter kind!");
let thirdInput = prompt("Please enter message");

let animal = {
    name: firstInput,
    kind: secondInput,
    speak: function (message) {
        return "I have " + this.kind + ". His name is " + this.name + ". " + this.name + " says: " + "'" + message + "!'";
    }
}
console.log(animal.speak(thirdInput));



