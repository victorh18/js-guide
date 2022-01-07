const task3Element = document.getElementById('task-3');

function firstFunction() {
    alert('Lorem ipsum!');
}

function greetings(text) {
    alert('Guten tag, ' + text);
}

firstFunction();
greetings('Victor');

task3Element.addEventListener('click', firstFunction);

function thirdFunction(text1, text2, text3) {
    return text1 + ' ' + text2 + ' ' + text3;
}

alert(thirdFunction("Look", "mama,", "no hands!"));


