"use strict";

// часть 1
let num = 50;

if(num < 49) {
	console.log('мало');
} else if (num > 10){
	console.log('много');
} else {
	console.log('Все пропало');
}

(num == 60) ? console.log('ok') : console.log('no');

let num2 = 123;

switch (num2) {
case 12: num2,
console.log('no');
	break;
case 121: num2,
console.log('no');
	break;
case 124: num2,
console.log('ok');
	break;
default:
    console.log('noooooo');
    break;
}

// часть 2
// const hamburger = 3;
// const fries = 0;

console.log(hamburger && fries);
console.log(hamburger || fries);
console.log(1 || 0);


if(hamburger === 3 && fries) {
    console.log('Я сыт');
} else if(hamburger || fries) {
    console.log('Ну сгодится');
} else {
    console.log('Я голоден');
}

// ИЛИ "||" находит первое истинное значение
// И «&&» находит первое ложное значение

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

