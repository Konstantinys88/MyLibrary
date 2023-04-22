'use strict'

// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b
//     }
//     console.log(sum())
// };

// showThis(2, 2);

// const obj = {
//     a: 15,
//     b: 20,
//     sum: function () {
//         console.log(this);
//     }
// }

// obj.sum();

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "Ivan"
}

sayName.call(user, "Ivan")
sayName.apply(user, ['iban'])

function count(num){
    return this * num;
}

const double = count.bind(2)
console.log(double(3))
console.log(double(13))

// 1. обычная функцмя this = window, в строгом режиме undefined
// 2. контекст у методов обьектов сам обьект
// 3. this в конструкторах и классах это новый экземпляр обьекта
// 4. ручная привязка this - call, apply, bind