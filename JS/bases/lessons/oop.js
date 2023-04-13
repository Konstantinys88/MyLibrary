"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 100,
    seyHello: function() {
        console.log("Hello");
    }
};

const jonh = {
    health: 100,
};

Object.setPrototypeOf(jonh, solder);
jonh.seyHello();

const egor = Object.create(solder);

egor.armor = 500;
egor.seyHello();
console.log(egor.armor);





