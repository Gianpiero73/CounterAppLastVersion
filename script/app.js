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
const $plusButton = createButtonWithHandler('+', () => updateValue(Math.min(value + 1)));
$plusButton.classList = ("plus");
const $minusButton = createButtonWithHandler('-', () => updateValue(Math.max(value - 1)));
$minusButton.classList = ("minus");
const $resetButton = createButtonWithHandler("", () => updateValue(value = 0));
$resetButton.classList = ("reset");


container.append($plusButton, $minusButton, $number, $resetButton);
btn.appendChild($plusButton);
btn.appendChild($resetButton);
btn.appendChild($minusButton);

//create Element
function createElement(tag, elemText) {
    let element = document.createElement(tag);
    element.innerText = elemText;
    return element;
}


//create Button
function createButtonWithHandler(elemText, buttonHandler) {
    let button = createElement('button', elemText);
    button.addEventListener('click', buttonHandler);
    return button;

}

//update Value
function updateValue(newVal) {
    value = newVal;
    $number.innerText = value;
}
