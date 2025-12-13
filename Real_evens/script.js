const display = document.querySelector("#display");
const input = document.querySelector("input");
const find = document.querySelector("#find");
const clear = document.querySelector("#clear");

find.addEventListener("click", ()=>{
    display.textContent = "";
    const num = input.value;
    input.value = "";
    input.focus();

    for (let i = 1; i <= num; i++){
        if (i % 2 !== 0){
            display.textContent += `${i} in an Odd number\n`;
        }
        else{
            display.textContent += `${i} even!\n`;
        }
        
    };
    display.textContent += `\nFinished!\n`
});

clear.addEventListener("click", ()=>{
    display.textContent = "";
})

