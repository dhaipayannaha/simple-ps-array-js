// 7. Remove Duplicates from an Array
function uniquNumber (numbers){
    const unique = [];
    for (let i = 0; i < numbers.length; i++){
        if (!unique.includes(numbers[i])){
            unique.push(numbers[i]);
        }
    }
    return unique;
}
const number = uniquNumber([54, 67,85, 98, 89, 89,46]);
console.log(number);