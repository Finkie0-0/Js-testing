const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i <= 10; i++){
        const newResults = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResults}\n`;
    }
    results.textContent+= "\nDone!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));