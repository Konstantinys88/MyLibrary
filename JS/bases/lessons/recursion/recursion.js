// function pow (x, n) {
//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         res = x * res;
//     } return res;
// }

"use strict";

// function pow2 (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow2(x, n - 1);
//     }
// }

// console.log(pow2(2,0));
// console.log(pow2(2,1));
// console.log(pow2(2,2));
// console.log(pow2(2,3));

let student = {
    js: [{
        name: "john",
        progress: 100
    }, {
        name: "ivan",
        progress: 60
    }],

    html: {
        basic: [{
            name: "peter",
            progress: 20
        }, {
            name: "ann",
            progress: 18

        }],

        pro:[{
            name: "sam",
            progress: 10
        }],
        // semi: {
        //     students: [{
        //         name: "test",
        //         progress: 10
        //     }]
        // }
    }
};

let total = 0;
let students = 0;

function getTotalProgressByIteration(data) {
    for(let course of Object.values(data)) {
        if(Array.isArray(course)) {
            students += course.length;

            for(let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for(let subCourse of Object.values(course)) {
                students += subCourse.length;

                for(let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(student));

function getTotalProgressByRecursion(data) {
    if(Array.isArray(data)) {
        let total = 0;
        for(let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0,0];
        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] +=  subDataArr[0];
            total[1] +=  subDataArr[1];
        }
        return total;
    } 
}


const res = getTotalProgressByRecursion(student);
console.log(res[0]/res[1]);