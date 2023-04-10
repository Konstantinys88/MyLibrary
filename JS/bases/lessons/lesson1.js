`use strict`;

const arr = ["a","b","c"];
arr[10] = '123'
console.log(arr[10]);
console.log(arr);

const arrObj = {
    a:"a",
    1:"b",
    2:"c",
    abc: {
        gff: "123",
    }
};

const b = 'b';
arrObj[`b`] = "v";

console.log(arrObj.b);

// const obj = {a:1, b:2,};
const obj = {
    Anna: 500,
    Alice: 900,
};