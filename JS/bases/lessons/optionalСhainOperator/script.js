'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

// block?.textContent = '123';

console.log(1 + 2);

let userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log("heloo");
    }
};

userData.say?.();
userData.gey?.();

// if(userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills?.js);
// }

// userData = null;

console.log(userData?.skills?.js);