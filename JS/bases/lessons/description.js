"use strict";


// const birthday = Symbol('birthday');

const user =  {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    // [birthday]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// ------------------------------------------------------------------- Descriptors


// Object.defineProperty(user, 'birthday', {value:prompt('Date?'), writable: false, enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'genre', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'genre'));

// user.name = "fsfsd";

// writable
// enumerable
// configurable
// -----------------------------

// Object.defineProperty(user, 'showMyPublicData', {enumerable:false});

// console.log(Object.getOwnPropertyDescriptor(user, birthday));

// for(let key in user) {
//     console.log(key);
// }

// Object.defineProperties(user, {
//     name:{writable:false},
//     surname:{writable:true},
// });


//------------------------------------------------------ iterable constructions

// for(const key in user) {
//     console.log(user[key]);
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// console.dir(arr);

// for(const key of arr) {
//     console.log(key);
// }

// const str = 'string';

// for(const key of str) {
//     console.log(str[key]);
// }

// const salaries = {
//     john: 500,
//     ivan: 100,
//     ann: 5000,
//     sayHelo: function() {
//         console.log('Hello');
//     },

// };

// salaries[Symbol.iterator] = function() {
//     return {
//         current: this.john,
//         last: this.ann,

//         next() {
//             if(this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };

// for (let res of salaries) {
//     console.log(res);
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// ==================================================================== Map

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper:400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});


// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// console.log(map);

// map.keys();

// const goods = [];
// for(let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
//     // console.log(shop);
// }
// console.log(goods);

// for(let price of map.values()) {
//     console.log(price);
// }

// for(let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

const userMap = new Map(Object.entries(user));


const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);