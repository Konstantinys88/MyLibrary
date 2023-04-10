"use strict";

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
