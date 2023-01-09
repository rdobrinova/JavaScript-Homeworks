function getHistory() {
    return document.getElementById("historyValue").innerText;
}

function clear() {
    document.getElementById("historyValue").innerText = "";
    document.getElementById("outputValue").innerText = "";
}

function appendNumberToHistory(userInput) {
    let historyValue = document.getElementById("historyValue");

    if (historyValue.innerText.length === 0 && userInput === 0) {
        return;
    }

    historyValue.innerText += userInput;
}

function appendOperatorToHistory(userInput, arrayOfOperators) {
    let historyValue = document.getElementById("historyValue");

    if (historyValue.innerText.length === 0) {
        return;
    }

    let lastCharacter = historyValue.innerText[historyValue.innerText.length - 1];

    if (arrayOfOperators.includes(lastCharacter)) {
        historyValue.innerText = historyValue.innerHTML.substring(0, historyValue.innerText.lastIndexOf(lastCharacter)) + userInput;
    } else {
        historyValue.innerText += userInput;
    }
}


function calculateOutput(operators) {
    let history = document.getElementById("historyValue");

    if (history.innerText.length == 0) {
        return;
    }

    let lastCharacter = history.innerText[history.innerText.length - 1];

    if (operators.includes(lastCharacter)) {
        history.innerText = history.innerText.substring(0, history.innerText.lastIndexOf(lastCharacter));
    }

    let equationResult = new Function("return " + history.innerText);
    document.getElementById("outputValue").innerText = equationResult();
}

let arrayOfCalculatorNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayOfCalculatorOperators = ['÷', '*', '-', '+', '.'];

for (const num of arrayOfCalculatorNumbers) {
    document.getElementById(num).addEventListener("click", () => {
        appendNumberToHistory(num);
    });
}

for (const operator of arrayOfCalculatorOperators) {
    document.getElementById(operator).addEventListener("click", () => {
        appendOperatorToHistory(operator, arrayOfCalculatorOperators);
    });
}


document.getElementById("clear").addEventListener("click", clear);
document.getElementById("=").addEventListener("click", () => {
    calculateOutput(arrayOfCalculatorOperators)
});

