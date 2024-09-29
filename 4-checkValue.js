// 4. Check if an Array Contains a Value
function  numbers(array, value){
   
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

const reverse = numbers([54, 67,85, 98, 89, 46], 98);
console.log(reverse);