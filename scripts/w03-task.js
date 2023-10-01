/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (num1, num2){
    return num1 + num2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2) {
    return num1 - num2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers(){
    let dividend = document.querySelector('#dividend').value;
    let divisor = document.querySelector('#divisor').value;
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let date = new Date;

let currentYear = date.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').textContent = numbers;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbers.filter(number => (number % 2 == 1));


/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbers.filter(number => (number % 2 == 0));

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum += number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const mutipliedByTwo = numbers.map(number => number * 2);
document.querySelector('#sumOfMultiplied').textContent = mutipliedByTwo.reduce((sum, number) => sum += number);
