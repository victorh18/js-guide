window.onload = () => {
    const defaultResult = 0;
    let currentResult = defaultResult;

    function getUserInput() {
        return parseInt(userInput.value);
    }

    function add() {
        const initialValue = currentResult;
        const enteredNumber = getUserInput();
        currentResult += enteredNumber;
        outputResult(currentResult, `${initialValue} + ${enteredNumber}`);
    }

    addBtn.addEventListener('click', add);
    
}