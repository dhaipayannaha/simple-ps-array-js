// 2. Sum of All Numbers in an Array
function sumElement (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const num = [54, 67,85, 98, 89, 46];
const sum = sumElement(num);
console.log(sum);