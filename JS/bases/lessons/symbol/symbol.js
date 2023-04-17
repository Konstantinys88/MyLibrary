"use strict";

let id = Symbol('id');
const obj = {
    name: 'Test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};


console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
obj[Object.getOwnPropertySymbols(obj)[0]] = 123;
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj);

// for(let v in obj) {
//     console.log(v);
// }

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     id: 123
// };
