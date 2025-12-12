//Make a list or array of people
//Add the names Phil and Lola into the not invited list else add into the added list

// const people = [
//     "chris",
//     "Anne",
//     "Colin",
//     "Terri",
//     "Phil",
//     "Lola",
//     "Sam",
//     "Kay",
//     "Bruce",
// ];

// // const admitted = document.querySelector(".admitted");
// // const refused = document.querySelector(".refused");
// // admitted.textContent = "Admit: ";
// // refused.textContent = "Refuse: ";


//Display selector
const results = document.querySelector("#results");

//Calculations made then sent to the Displayer
function calculate(){
    for (let i = 1; i < 10; i++){
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    };
    results.textContent += "\nFinished!\n\n";
};

 //Button initializations
const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

//events that should happen when buttons have been clicked
calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", ()=> (results.textContent = ""));
