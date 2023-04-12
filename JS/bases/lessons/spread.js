"use strict";

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copyF(mainObj) {
    let objCopy = {};
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

let number = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4,
    }
};
// const newNumbers = copyF(number);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(number);

// console.log(Object.assign({number}, obj));

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[0] = "QWE";

// console.log(oldArray);
// console.log(newArray);

const video = ['youtobe','vimeo','rutube'],
blogs = ['wordpress','livejournsl', 'blogger'],
internet = [...video, ...blogs, 'vk','facebook'];

console.log(internet);

