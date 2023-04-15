'use strict';

const btn = document.querySelectorAll("button");

// btn.addEventListener("click", (e) => {
    // console.log(e.target);
    // e.target.style.background = "red";
    // alert("click add");
// });

// let i = 0;
// const deleteElem = (e) => {
//     e.target.style.background = "red";
//     console.log(e.target);
//     i++;
//     if(i == 1) {
//         btn.removeEventListener("click", deleteElem);
//     }
// };


// btn.addEventListener('click', deleteElem);


const link = document.querySelector('a');

link.addEventListener('click', function(e) {
    e.preventDefault();
});




const red = (e) => {
    e.target.style.background = "red";
};

btn.forEach(item => {
    item.addEventListener('click', red);
});
