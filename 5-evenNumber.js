// 5. Filter Even Numbers from an Array
function evenNumber (numbers){
    const store = [];
     for (let i = 0; i < numbers.length; i++){
         if (numbers[i] % 2 === 0){
             store.push(numbers[i]);
         }
     }
     return store;
 }

const number = evenNumber([54, 67,85, 98, 89, 46]);
console.log(number);