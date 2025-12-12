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

//variable with the contact infomation
const contacts = [
    "A:12345",
    "B:23456",
    "C:34567",
    "D:45678",
    "E:56789",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function Searching(){
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts){
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName){
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        };
    }
    if (para.textContent === ""){
        para.textContent = "Contact not found.";
    };
};

btn.addEventListener("click", Searching);