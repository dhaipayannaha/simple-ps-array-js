// 1. Find the Largest Number in an Array
function largestElement(numbers) {
    largest = numbers[0];
    for (let i = 0; i<numbers.length; i++){
        const element =numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}


const number = [56, 78, 87, 98, 47, 56];
const oldest = largestElement(number);
console.log(oldest);