// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book.The object should have the next properties:
// title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
//     BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.isBookRead = function () {
        if (this.readingStatus) {
            console.log("Already read '" + this.title + "' by " + this.author + ".");
        } else {
            console.log("You still need to read '" + this.title + "' by " + this.author + ".");
        }
    }
}
let firstInput = prompt("Please enter book name!");
let secondInput = prompt("Please enter author name!");

function getReadingStatus() {
    while (true) {
        let userInput = prompt("Have you read this book? (Yes/No)");
        if (userInput.toLowerCase() === "yes") {
            return true;
        }
        if (userInput.toLowerCase() === "no") {
            return false;
        }
    }
}

let book = new Book(firstInput, secondInput, getReadingStatus());
book.isBookRead();