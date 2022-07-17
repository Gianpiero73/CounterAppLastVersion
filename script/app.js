//counter container
let container = document.createElement("div");
container.classList = ("container");
document.body.appendChild(container);

// // // container button

let btn = document.createElement("div");
btn.classList = ("btn");
container.append(btn);

//number
const $number = createElement('div', '0');
$number.classList = ("numb");

let value = 0;

//btns
const $plusButton = createButtonWithHandler('+', () => updateLabelValue(Math.min(value + 1)));
$plusButton.classList = ("plus");
const $minusButton = createButtonWithHandler('-', () => updateLabelValue(Math.max(value - 1)));
$minusButton.classList = ("minus");
const $resetButton = createButtonWithHandler("", () => updateLabelValue(value = 0));
$resetButton.classList = ("reset");


container.append($plusButton, $minusButton, $number, $resetButton);
btn.appendChild($plusButton);
btn.appendChild($resetButton);
btn.appendChild($minusButton);

//create Element
function createElement(tag, innerText) {
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}


//create Button
function createButtonWithHandler(innerText, clickHandler) {
    const button = createElement('button', innerText);
    button.addEventListener('click', clickHandler);
    return button;

}

//update Value
function updateLabelValue(newVal) {
    value = newVal;
    $number.innerText = value;
}