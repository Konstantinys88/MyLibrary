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

