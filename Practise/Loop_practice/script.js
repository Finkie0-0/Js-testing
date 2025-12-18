//Create a button that multiplies evens by 2 and odds by 3

const num = document.querySelector("input");
const result = document.querySelector("pre");

const calc = document.querySelector("button");

calc.addEventListener("click", ()=>{
    let nums = num.value;
    num.value = "";
    num.focus();

    if (nums % 2 === 0){
        result.textContent = `${nums * 2}`;
    }else if (nums % 3 === 0){
        result.textContent = `${nums * 3}`;
    }else{
        result.textContent = `This is a weird number!`
    }
});