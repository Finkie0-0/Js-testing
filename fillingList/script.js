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

const contacts = [
    "Chris: 22233232",
    "Sarah: 23212313",
    "Bill: 21123112",
    "Mary: 23334234",
    "Dianne: 92302913"
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLocaleLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLocaleLowerCase() === searchName){
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        };
    };
    if (para.textContent === ""){
        para.textContent = "Contact not Found."
    }
});