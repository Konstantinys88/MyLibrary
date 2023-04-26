'use strict';

// new RegExp('patern', 'flags');
// /patern/flags

const ans = prompt('Введите ваше имя');
const reg = /\d/ig;
console.log(ans.match(reg));
// console.log(ans.match(reg));

// флаги
// i
// g
// m

// классы
// \d ишет все цыфры
// \w ишет все буквы
// \s ишет все пробелы

// D ишет не числа 
// W ищет не буквы


// const pass = prompt('Password - 12');
// console.log(pass.replace(/-/g, ':'))