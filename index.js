// TODO: this file! :)
const numberBank = [];
const numberInput = document.getElementById('numberInput');
const numberBankDisplay = document.getElementById('numberBank');
const oddDisplay = document.getElementById('odd');
const evenDisplay = document.getElementById('even');

document.getElementById('addNumberBtn').addEventListener('click', () => {
    const value = numberInput.value;
    const number = Number(value);

    if (!isNaN(number) && Number.isInteger(number)) {
        numberBank.push(number);
        updateNumberBankDisplay();
        numberInput.value = '';
    } else {
        alert('Please enter a valid integer.');
    }
});

document.getElementById('sortOneBtn').addEventListener('click', () => {
    if (numberBank.length > 0) {
        const number = numberBank.shift();
        placeInCategory(number);
        updateNumberBankDisplay();
    } else {
        alert('No numbers in the bank to sort.');
    }
});

document.getElementById('sortAllBtn').addEventListener('click', () => {
    while (numberBank.length > 0) {
        const number = numberBank.shift();
        placeInCategory(number);
    }
    updateNumberBankDisplay();
});

function placeInCategory(number) {
    const li = document.createElement('li');
    li.textContent = number;

    if (number % 2 === 0) {
        evenDisplay.appendChild(li);
    } else {
        oddDisplay.appendChild(li);
    }
}

function updateNumberBankDisplay() {
    numberBankDisplay.innerHTML = '';
    numberBank.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        numberBankDisplay.appendChild(li);
    });
}
