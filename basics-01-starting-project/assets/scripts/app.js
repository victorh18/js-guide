window.onload = () => {
    const defaultResult = 0;
    let currentResult = defaultResult;

    function getUserInput() {
        return parseInt(userInput.value);
    }

    function createAndWriteOutput(operator, initialValue, enteredNumber) {
        const descResult = `${initialValue} ${operator} ${enteredNumber}`;
        outputResult(currentResult, descResult);
    }

    function add() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult += enteredNumber;
        createAndWriteOutput('+', initialValue, enteredNumber);
    }

    function substract() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult -= enteredNumber;
        createAndWriteOutput('-', initialValue, enteredNumber);
    }

    function multiply() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult *= enteredNumber;
        createAndWriteOutput('*', initialValue, enteredNumber);
    }

    function divide() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult /= enteredNumber;
        createAndWriteOutput('/', initialValue, enteredNumber);
    }

    addBtn.addEventListener('click', add);
    subtractBtn.addEventListener('click', substract);
    multiplyBtn.addEventListener('click', multiply);
    divideBtn.addEventListener('click', divide);
}