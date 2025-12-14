//Add declarations to the input, buttons and the display

const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");

const display = document.querySelector("pre");

function add(){
    display.textContent = `${num1} + ${num2} = ${num1 + num2}`;
}

plus.addEventListener("click", add);