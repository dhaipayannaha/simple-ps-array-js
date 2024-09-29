// 6. Find the Index of a Value in an Array
function checkValue (numbers, value){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === value){
            return i;
        }
    }
    return -1;
}
const number = checkValue([54, 67,85, 98, 89, 46], 89);
console.log(number);
