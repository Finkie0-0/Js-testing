//Searching for name in a list then break when found

const contacts = [
    "Chris:2232322",
    "Sarlina:3453456",
    "Khanya:7654322",
    "Taina:9998769",
    "Priscila:9384975",
];

const para = document.querySelector("#name");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === ""){
        para.textContent = "Contact not found.";
    }
});

//Search for integer squares of a number when found continue till end of the loop

const paraN = document.querySelector("#numbers");
const inputNumber = document.querySelector("#numberInput");
const numBtn = document.querySelector("#numberGen");

numBtn.addEventListener("click", () =>{
    paraN.textContent = "Output: ";
    const num = inputNumber.value;
    inputNumber.value = "";
    inputNumber.focus();
    for (let i = 1; i <= num; i++){
        let squareRoot = Math.sqrt(i);
        if (Math.floor(squareRoot) !== squareRoot){
            continue;
        }
        paraN.textContent += `${i} `;
    }
});

