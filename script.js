function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Handle keyboard events
document.addEventListener('keydown', function (event) {
    if (event.key.match(/[0-9\+\-\*\/\.]/)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Delete') {
        clearDisplay();
    }
});