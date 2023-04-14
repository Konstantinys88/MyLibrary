'use strict';

// Lesson1 Получение элементов со страницы

// получение элемента по id
const box = document.getElementById("box");
// console.log(box);


// получение элемента по тег
const btns = document.getElementsByTagName('button');
// console.log(btns[0]);
// btns[2].style.backgroundColor = 'red';

// получение элемента по классу
const circles = document.getElementsByClassName("circle");
// console.log(circles);

// получение элемента по селектору
const hearts = document.querySelectorAll(".heart");
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

const oneHearts = document.querySelector(".heart");
// console.log(oneHearts);

// Lesson2 Действия с элементами на странице
console.dir(box);
box.style.backgroundColor = "green";
box.style.width = "500px";

box.style.cssText = "background-color: blue; height: 500px; width: 500px";

btns[1].style.borderRadius = "50%";
circles[2].style.backgroundColor = "red";

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "green";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const div2 = document.createElement("p");

const text = document.createTextNode("dasdasd");
const wrap = document.querySelector('.wrapper');

div.classList.add("black");
div2.classList.add("black");

document.body.append(div);

// wrap.append(div);
// wrap.prepend(div2);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrap.append(text);

div.innerHTML = "<h1>Hello !</h1>";
// div.textContent = "wwww";

div.insertAdjacentHTML(`afterend`,`<h2>HELLO!</h2>`);