let calculatorValue = "";
let display = document.querySelector("#display");
let equation = []; // this array holds numbers and operators
let lastIsAnOperator = false; //  user can't add operators twice in a row

//assign digits to buttons
let digits = [];
let domDigits = document.getElementsByClassName("digit");
[...domDigits].forEach(item => {
  digits.push(item)
});

digits.forEach(digit => {
  digit.addEventListener("click", () => {
    calculatorValue += digit.value;
    display.textContent += digit.value;
    lastIsAnOperator = false;
  })
});

let addButton = document.querySelector("#btn-add"); 
addButton.addEventListener("click", () => { 
  appendOperator(add);
});

let subtractButton = document.querySelector("#btn-subtract"); 
subtractButton.addEventListener("click", () => {
  appendOperator(subtract);
});

let multiplyButton = document.querySelector("#btn-multiply"); 
multiplyButton.addEventListener("click", () => { 
  appendOperator(multiply);
});

let divideButton = document.querySelector("#btn-divide"); 
divideButton.addEventListener("click", () => { 
  appendOperator(divide);
});

let dotButton = document.querySelector("#btn-dot");
dotButton.addEventListener("click", () => {
  if (calculatorValue.split("")[calculatorValue.length - 1] != ".") { //user can't add . twice in a row
    calculatorValue += ".";
    display.textContent += ".";
  }
});

let equalsButton = document.querySelector("#btn-equals"); 
equalsButton.addEventListener("click", () => {
  equation.push(calculatorValue);
  makeCalculations();
});

let clearButton = document.querySelector("#btn-ac");
clearButton.addEventListener("click", () => {
  equation = [];
  calculatorValue = "";
  display.textContent = "";
});

function makeCalculations() {
  for (let i = 0; i < equation.length-1; i = i + 2) {
    equation[i + 2] = operate(equation[i+1], equation[i], equation[i+2]);
  };
  if (equation[equation.length - 1] == Infinity) {
    display.textContent = "Boom!";
    calculatorValue = Infinity;
  } else {
    display.textContent = +equation[equation.length - 1].toFixed(2);
    calculatorValue = equation[equation.length - 1];
  };
  equation = [];
};

function appendOperator(operator) {
  if (!lastIsAnOperator) {
    equation.push(calculatorValue);
    calculatorValue = "";
    equation.push(operator);
    display.textContent += getOperatorSymbol(operator);
    lastIsAnOperator = true;
  };
};

function getOperatorSymbol(operator) {
  if (operator == add) return "+";
  if (operator == subtract) return "-";
  if (operator == multiply) return "*";
  if (operator == divide) return "/";
}

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
  return func(+a, +b);
}