window.onload = () => {
    const defaultResult = 0;
    let currentResult = defaultResult;

    function add() {
        currentResult += userInput.value;
        outputResult(currentResult, '');
    }

    addBtn.addEventListener('click', add);

    
}