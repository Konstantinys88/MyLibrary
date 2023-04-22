"use strict";

// const num = new Function(3);
// console.log(num)

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hELLO ${this.name}`)
    }
}

const ivan = new User('Ivan', 12);
console.log(ivan);

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name}`)
}

ivan.hello();
ivan.exit();

