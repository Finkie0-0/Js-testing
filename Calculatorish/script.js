//Add declarations to the input, buttons and the display

const num1 = document.getElementById("Num1");
const num2 = document.getElementById("Num2");

const display = document.querySelector("pre");

const plus = document.getElementById("plus");
const clr = document.querySelector("#clear");


plus.addEventListener("click", ()=>{
    const resultAdd = `${num1} + ${num2} = ${num1 + num2}`;

    display.textContent = `${resultAdd}`;
});

clr.addEventListener("click", ()=> (display.textContent = ""));

