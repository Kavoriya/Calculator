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

let calculatorValue = "";
let display = document.querySelector("#display");
let equation = []; // this array holds numbers and operators
let lastIsAnOperator = false;

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
  if (!lastIsAnOperator) {
    equation.push(calculatorValue);
    calculatorValue = "";
    equation.push(add);
    display.textContent += "+";
    lastIsAnOperator = true;
  };
});

let subtractButton = document.querySelector("#btn-subtract"); 
subtractButton.addEventListener("click", () => {
  if (!lastIsAnOperator) { 
    equation.push(calculatorValue);
    calculatorValue = "";
    equation.push(subtract);
    display.textContent += "-";
    lastIsAnOperator = true;
  };
});

let multiplyButton = document.querySelector("#btn-multiply"); 
multiplyButton.addEventListener("click", () => { 
  if (!lastIsAnOperator) {
    equation.push(calculatorValue);
    calculatorValue = "";
    equation.push(multiply);
    display.textContent += "*";
    lastIsAnOperator = true;
  };
});

let divideButton = document.querySelector("#btn-divide"); 
divideButton.addEventListener("click", () => { 
  if (!lastIsAnOperator) {
    equation.push(calculatorValue);
    calculatorValue = "";
    equation.push(divide);
    display.textContent += "/";
    lastIsAnOperator = true;
  };
});

let dotButton = document.querySelector("#btn-dot");
dotButton.addEventListener("click", () => {
  if (calculatorValue.split("")[calculatorValue.length - 1] != ".") {
    calculatorValue += ".";
    display.textContent += ".";
  }
});

let equalsButton = document.querySelector("#btn-equals"); 
equalsButton.addEventListener("click", () => {
  equation.push(calculatorValue);
  for (let i = 0; i < equation.length-1; i = i + 2) {
    equation[i + 2] = operate(equation[i+1], equation[i], equation[i+2]);
    console.log(equation);
  }
  display.textContent = +equation[equation.length - 1].toFixed(2);
  calculatorValue = equation[equation.length - 1];
  equation = [];
  console.log(equation);
  console.log(calculatorValue);
});

let clearButton = document.querySelector("#btn-ac");
clearButton.addEventListener("click", () => {
  equation = [];
  calculatorValue = "";
  display.textContent = "";
});