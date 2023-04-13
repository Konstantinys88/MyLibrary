"use strict";

// console.log(typeof(String(4)));

//замыкания

// let number = 5;debugger

// function log() {
//     // let number = 4;debugger
//     console.log(number);debugger
// }

// number = 6;

// log();debugger

// number = 7;

// log();debugger

function createCoounter() {
    let counter = 0;

    const myFunction = function() {debugger
        counter = counter + 1;debugger
        return counter;debugger
    }; 
    return myFunction;
}
debugger
const increment = createCoounter();debugger

const c1 = increment();debugger

const c2 = increment();debugger

const c3 = increment();debugger

console.log(c1,c2,c3);

// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// }

console.log("145"[2]);