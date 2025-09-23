const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0){
    const para = document.createElement("p");
    if(i === 0){
        para.textContent = `Boom! Shaka Laka!`;
    }
    else if (i === 10){
        para.textContent = `Countdown ${i}!`;
    }
    else{
        para.textContent = `${i}`
    }
    output.appendChild(para);
    i--;
}
