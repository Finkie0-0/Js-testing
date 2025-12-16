// const names = [
//     "A",
//     "S",
//     "D",
//     "F",
//     "G",
//     "H",
//     "J",
//     "K",
//     "L"
// ];

// const look = document.querySelector(".look");
// const rest = document.querySelector(".rest");

// look.textContent = "Looking for: ";
// rest.textContent = "The Rest: ";

// for (i = 0; i < names.length; i++){
//     if (names[i] === "S"){
//         look.textContent += `letter: ${names[i]} in position: ${i + 1}`
//     }else{
//         rest.textContent += `\n${names[i]}`
//     }

// }

const sum = document.querySelector(".sum");
const values = document.querySelector(".numbers");

let added = 0

while (true){
    num = +prompt("Enter a number:", "");
    if (!num) break;
    added += num;
    values.textContent += `${num}`;
}
sum.textContent += `The sum is ${added}`;