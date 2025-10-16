let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(currentInput); // Using eval for simplicity, but generally not recommended for production due to security risks.
        display.value = result;
        currentInput = String(result);
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}