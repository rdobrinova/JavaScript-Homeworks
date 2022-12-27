// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is(ex.Row - 3 Column - 1)
// Don't forget to use google! :)


function getNumberInput(inputMessage) {
    let input = prompt(inputMessage);
    let parsedInput = parseInt(input);

    if (!Number.isNaN(parsedInput)) {
        return parsedInput;
    }
    return 0;
}
let body = document.getElementsByTagName("body")[0];
let firstInput = getNumberInput("Please enter number of rows!");
let secondInput = getNumberInput("Please enter number of columns!");



function tableCreate(row, col) {
    let body = document.body;
    let table = document.createElement('table');
    table.style.width = '400px';
    table.style.border = '1px solid black';

    for (let i = 0; i < row; i++) {
        let tr = table.insertRow();
        for (let j = 0; j < col; j++) {
            // let td = tr.insertCell();
            // td.appendChild(document.createTextNode(`${i + 1}.${j + 1}`));
            // td.style.border = '1px solid black';


            let td = tr.insertCell();
            td.textContent = `${i + 1}.${j + 1}`
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(table);
}

tableCreate(firstInput, secondInput);