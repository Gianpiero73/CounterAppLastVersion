//counter container
const container = document.createElement("div");
container.classList = ("container");
document.body.appendChild(container);

//button container
const btn = document.createElement("div");
btn.classList = ("btn");
container.append(btn);

//create element
const createElement = (tag, text, classname) => {

    const element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(classname);
    return element;
};
//buttons
const number = createElement('div', '0', "numb");
const plusButton = createElement("button", "+", "plus");
const resetButton = createElement("button", "", "reset");
const minusButton = createElement("button", "-", "minus");

btn.append(number, plusButton, resetButton, minusButton);

//Counter
let counter = 0;
plusButton.addEventListener("click", () => {
    counter++;
    number.innerText = counter;
});
minusButton.addEventListener("click", () => {
    counter--;
    number.innerText = counter;
});

resetButton.addEventListener("click", () => {
    counter = 0;
    number.innerText = counter;
});
