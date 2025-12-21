function isOdd(num){
    return num % 2 !== 0;
}
const arr = [1,2,3,4,5,6,7];
const oddNums = arr.filter(isOdd);
console.log(oddNums);