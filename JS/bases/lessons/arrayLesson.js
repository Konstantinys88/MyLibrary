"use strict";

const arr = [1,2,3,14,5,26];
console.log(arr.sort(compareNum));

function compareNum(a,b) {
    return a - b;
}

// удаляет последний элемент
// arr.pop(); 

// добавляет в конец указанный элемент
// arr.push(7);

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for( let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item}: внутри массива ${arr}`)
// });

// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));