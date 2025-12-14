//Add declarations to the input, buttons and the display

const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");

const plus = document.querySelector("#plus");
const sub = document.querySelector("#sub");
const multi = document.querySelector("#multi");
const div = document.querySelector("#div");
const mod = document.querySelector("#mod");
const clear = document.querySelector("#clear");

const display = document.querySelector("pre")

function add(){
    display.textContent = `${num1} + ${num2} = ${num1 + num2}`;
}

plus.addEventListener("click", add);