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

let addButton = document.querySelector("#btn-add"); 
addButton.addEventListener("click", () => { 
  equation.push(calculatorValue);
  calculatorValue = "";
  equation.push(add);
  display.textContent += "+";
  console.log(equation);
});

let equalsButton = document.querySelector("#btn-equals"); 
equalsButton.addEventListener("click", () => {
  equation.push(calculatorValue);
  for (let i = 0; i < equation.length-1; i = i + 2) { 
    equation[i + 2] = operate(equation[i+1], equation[i], equation[i+2]);
    console.log(equation);
  }
  display.textContent = equation[equation.length - 1];
});