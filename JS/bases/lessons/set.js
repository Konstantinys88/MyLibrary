"use strict";

const arr = ['Alex', 'Ann','Oleg','Ann'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

// const set = new Set(arr);
// set.add('Ivan');
// set.add('Vasia');
// set.add('Oleg');
// console.log(set);

// set.delete('Oleg');
// console.log(set);

// for(let v of set) {
//     console.log(v);
// }

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });

// console.log(set.values());

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
  
promise.then((value) => {
    console.log(value);
});

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
function one() {
    const promises = [a(), b(), c()];
    Promise.all(promises).then(values => console.log(values))
}
 
one();