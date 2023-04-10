"use strict";

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for(let i = 1; i < 8; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i); 
// }

let result = '';
const len = 7;

for(let i = 1; i <= len; i++) {
    for(let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}


console.log(result);

// метки
firsr:for(let i = 0; i < 3; i++) {
    console.log(`first ${i}`);
    for(let j = 0; j < 3; j++) {
        console.log(`second ${j}`);
        for(let k = 0; k < 3; k++) {
            if(k === 2) continue firsr;
            console.log(`third ${k}`);
        }
    }
}