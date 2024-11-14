let display = document.getElementById("display");
let displayValue = "0";

function updateDisplay() {
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") displayValue = "0";
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if ("+-*/%".includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
