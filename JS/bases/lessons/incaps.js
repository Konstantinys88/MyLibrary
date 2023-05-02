'use strict';


class User {
    constructor(name, age) {
        this.name= name;
        this._age = age;
    }

    #surname = "petrychenko"

    say = () => {
        console.log(`Name user ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 111) {
            this._age = age;
        } else {
            console.log("Error");
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
ivan.say();

// ivan.age = 55;
// ivan.say();







