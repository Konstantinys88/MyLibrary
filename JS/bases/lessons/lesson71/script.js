'use strict';

const box = document.querySelector('.box');
// const widthC = box.clientWidth;
// const heightC = box.clientHeight;
// const widthO = box.offsetWidth;
// const heightO = box.offsetHeight;
const heightS = box.scrollHeight;
const widthS = box.scrollWidth;

console.log(widthS,heightS);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop)
});

console.log(box.getBoundingClientRect().top)

const style = window.getComputedStyle(box);