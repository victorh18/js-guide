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

    function writeToLog(
        operation, 
        initialNumber, 
        enteredNumber, 
        result
    ) {
        let entry = {
            operation, 
            initialNumber, 
            enteredNumber, 
            result
        };
        logEntries.push(entry);
        console.log(logEntries);
    }

    function add() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult += enteredNumber;
        createAndWriteOutput('+', initialValue, enteredNumber);
        writeToLog('ADD', initialValue, enteredNumber, currentResult);
    }

    function substract() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult -= enteredNumber;
        createAndWriteOutput('-', initialValue, enteredNumber);
        writeToLog('SUBSTRACT', initialValue, enteredNumber, currentResult);
    }

    function multiply() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult *= enteredNumber;
        createAndWriteOutput('*', initialValue, enteredNumber);
        writeToLog('MULTIPLY', initialValue, enteredNumber, currentResult);
    }

    function divide() {
        const enteredNumber = getUserInput();
        const initialValue = currentResult;
        currentResult /= enteredNumber;
        createAndWriteOutput('/', initialValue, enteredNumber);
        writeToLog('DIVIDE', initialValue, enteredNumber, currentResult);
    }

    addBtn.addEventListener('click', add);
    subtractBtn.addEventListener('click', substract);
    multiplyBtn.addEventListener('click', multiply);
    divideBtn.addEventListener('click', divide);
// }