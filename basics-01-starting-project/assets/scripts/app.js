// window.onload = () => {
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, initialValue, enteredNumber) {
  const descResult = `${initialValue} ${operator} ${enteredNumber}`;
  outputResult(currentResult, descResult);
}

function writeToLog(operation, initialNumber, enteredNumber, result) {
  let entry = {
    operation,
    initialNumber,
    enteredNumber,
    result,
  };
  logEntries.push(entry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();

  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBSTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }

  const initialValue = currentResult;
  let mathOperator = '';

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBSTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if(calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  
  createAndWriteOutput(mathOperator, initialValue, enteredNumber);
  writeToLog(currentResult, initialValue, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function substract() {
  calculateResult('SUBSTRACT');
}

function multiply() {
  calculateResult('MUL4TIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
// }
