'use strict'

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('a','b','c','d');

function calc(a = 1, b = 1) {
    console.log(a * b);
};

calc()