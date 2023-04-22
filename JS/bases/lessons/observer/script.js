'use strict';

const box = document.querySelector('.box');

let obsetwer = new MutationObserver(MutationRecord => {
    console.log(MutationRecord);
})


obsetwer.observe(box, {
    childList: true
})

obsetwer.disconnect();