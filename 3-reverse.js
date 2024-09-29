// 3. Reverse an Array
function reverseArray (numbers){
    let reverse = [];
    for (let i = numbers.length -1; i >= 0; i--){
        const element = numbers[i];
            reverse.push(element);
        
    }
    return reverse;
}

const num = [54, 67,85, 98, 89, 46];
const reverseNum = reverseArray(num);
console.log(reverseNum);