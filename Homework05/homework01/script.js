// HOMEWORK #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity(All strings)
// The function should return one big string with a story made from the arguments
// Example: This is * name *. * name * is a nice person.Today they are * mood *.They are * activity * all day.The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory(arrayOfStrings) {
    console.log("This is " + arrayOfStrings[0] + ". " + arrayOfStrings[0] + " is a nice person. Today they are " + arrayOfStrings[1] + ". They are " + arrayOfStrings[2] + " all day. The end.");
}
let array = ["Roze", "sad", "runing"];
tellStory(array);

