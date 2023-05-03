'use strict';


try {
    console.log('norm');
    console.log(a);
    console.log('res');
} catch(e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} finally {
    console.log("www");
}

// console.log(a);
console.log('still normal');