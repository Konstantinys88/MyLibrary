'use strict';

// получение элемента по id
const box = document.getElementById("box");
console.log(box);


// получение элемента по тег
const btns = document.getElementsByTagName('button');
console.log(btns[0]);

// btns[2].style.backgroundColor = 'red';

// получение элемента по классу
const circles = document.getElementsByClassName("circle");
console.log(circles);

// получение элемента по селектору
const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHearts = document.querySelector(".heart");
console.log(oneHearts);