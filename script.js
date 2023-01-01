function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(func, a, b) {
  return func(a, b);
}

let calculatorValue = "";
let display = document.querySelector("#display");

let digits = [];
let domDigits = document.getElementsByClassName("digit");
[...domDigits].forEach(item => {
  digits.push(item)
});

digits.forEach(digit => {
  digit.addEventListener("click", () => {
    calculatorValue += digit.value;
    display.textContent += digit.value;
  })
});