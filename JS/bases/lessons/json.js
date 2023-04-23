'use strict';

const person = {
    name: 'Alex',
    tel: "+744444444",
    parents: {
        mom: "Parent1",
        dad: "Parent2"
    }
};

const clone = JSON.parse(JSON.stringify(person));
console.log(person);
console.log(clone);
clone.parents.mom = '123';
console.log(clone);
console.log(person);