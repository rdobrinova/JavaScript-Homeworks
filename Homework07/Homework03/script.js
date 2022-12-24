// BONUS HOMEWORK
// Create a recipe page from inputs
// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1 - h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy:)


function getInput(inputMessage) {
    let input = prompt(inputMessage);

    if (typeof (input) === "string") {
        return input;
    }
    return "Wrong input!";
}


function getNumberInput(inputMessage) {
    let input = prompt(inputMessage);
    let parsedInput = parseInt(input);

    if (!Number.isNaN(parsedInput)) {
        return parsedInput;
    }
    return 0;
}


function getIngredients(inputMessage, numberOfIngredients) {
    let array = [];
    for (let i = 0; i < numberOfIngredients; i++) {
        let ingredient = prompt(inputMessage);
        array.push(ingredient);
    }
    return array;
}


let firstInput = getInput("Please enter name of your recepie");
let body = document.getElementsByTagName("body")[0];
let myHeader = document.createElement("h1");
myHeader.innerText = "The name of recepie is: " + firstInput;
body.appendChild(myHeader);


let secondInput = getNumberInput("How many ingredients do you need for the recipe?");
let paragraph1 = document.createElement("p");
paragraph1.innerText = "I need : " + secondInput + " ingredients";
body.appendChild(paragraph1);

let thirdInput = getIngredients("Please enter name of ingredient", secondInput);



function tableCreate(array) {
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.setAttribute("border", "2");
    tbl.setAttribute("cellpadding", "10");
    let tHead = document.createElement("thead");

    let headerRow = document.createElement("tr");

    let headerCol1 = document.createElement("th");
    headerCol1.textContent = "No.";
    headerRow.appendChild(headerCol1);

    let headerCol2 = document.createElement("th");
    headerCol2.textContent = "Ingredients";
    headerRow.appendChild(headerCol2);

    tHead.appendChild(headerRow);
    tbl.appendChild(tHead);
    let tBody = document.createElement("tbody");
    for (let i = 0; i < array.length; i++) {

        let bodyRow = document.createElement("tr");

        let bodyColum1 = document.createElement("td");
        bodyColum1.textContent = i + 1;
        bodyRow.appendChild(bodyColum1);

        let bodyColum2 = document.createElement("td");
        bodyColum2.textContent = array[i];
        bodyRow.appendChild(bodyColum2);

        tBody.appendChild(bodyRow);

    }
    tbl.appendChild(tBody);
    body.appendChild(tbl);
}
tableCreate(thirdInput);
