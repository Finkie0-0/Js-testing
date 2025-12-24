//Take in an array

// function sumOfTripledEvens(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//         //Step 1: If the element is an even number
//         if (array[i] % 2 === 0){
//             // Step 2: Multiply this number by three
//             const tripleEvenNumber = array[i] * 3;
//             //Step 3: Add the new number to the total
//             sum += tripleEvenNumber;
//         }
//     }
//     return sum;
// }

//Take in an array
// const arr = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// for (i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         let tripled = arr[i] * 3;

//         sum += tripled;
//     }
// }
// console.log(sum);

//Use the array methods to take evens in the array then multiply the evens by 3 then add numbers

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const filtedArr = arr.filter((num) => num % 2 === 0);
// const mappedArr = filtedArr.map((num) => num * 3);
// const redArr = mappedArr.reduce((total, currentItem) => {
//     return total + currentItem
// }, 0);

// console.log(redArr);


//Ask for the array from the user

//Display the results onto the form

//Step 1:Get user input using the prompt function
//Step 2:Print out the user input into the front page
//Step 3:Ensure the input is a number
//Step 4:Run the sumOfTripledEvens using the user input



// if(array !== NaN){
//     console.log("Numbers please");
// } //For when user input is not a number
const result = document.querySelector("pre");

const calc = document.querySelector("button");

let list = [];
let i = 0;

while (true){
    let array = prompt("Enter Numbers into a list: ");
    if ( array === ""){
        break;
    }else{
        list += array;
    }
    i++;
};



// function sumOfTripledEvens(){
//     return list
//         .filter((num) => num % 2 === 0)
//         .map((num) => num * 3)
//         .reduce((tot,current) => tot + current);
// };

//Change the list from string into a list
const realList = list.split("")

calc.addEventListener("click",() =>{
    const filterdArr = realList.filter((num) => num % 2 === 0);
    const mappedArr = filterdArr.map((num) => num * 3);
    const reducedArr = mappedArr.reduce((tot, current) => {
        return tot + current;
    });
    result.textContent = `The list is: ${list}\n The sum of the tripled evens: ${reducedArr}`;
});
