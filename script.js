let display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Remove the last character
function backspace() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

// Calculate the factorial
function calculateFactorial() {
    try {
        let num = parseInt(display.innerText);
        if (num < 0) {
            display.innerText = "Error";
            return;
        }
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        display.innerText = factorial;
    } catch {
        display.innerText = "Error";
    }
}

// Evaluate the expression
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
