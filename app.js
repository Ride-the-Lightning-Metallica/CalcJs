let calcControl = document.querySelector('.calc__control');
let calcInput = document.getElementById('calcInput');

let buttonsText = '0 1 CE 2 3 ← 4 5 6 7 8 9 - * / + ='.split(' ');

for (let symbol of buttonsText) {
    calcControl.innerHTML += `
        <button class="calc__control__button">${symbol}</button>
    `;
}

for (let button of document.getElementsByClassName('calc__control__button')) {
    button.onclick = buttonClick;
}

function clearInput() {
    calcInput.value = '0';
}

function calculate(value) {
    try {
        result = eval(value);
    } catch (error) {
        return true;
    }
    if (result === undefined) {
        result = '0';
    } else if (result === -Infinity || result === Infinity) {
        result = '0';
        alert('Zero Division Error');
    }

    calcInput.value = result;
}

function buttonClick() {
    buttonText = this.innerText;

    if (buttonText == 'CE') {
        clearInput();
    } else if (buttonText == '=') {
        calculate(calcInput.value);
    } else if (buttonText == '←') {
        calcInput.value =
            calcInput.value.length == 1
                ? '0'
                : calcInput.value.slice(0, calcInput.value.length - 1);
    } else if (calcInput.value[0] == '0') {
        clearInput();
        calcInput.value = buttonText;
    } else {
        calcInput.value += buttonText;
    }
}
