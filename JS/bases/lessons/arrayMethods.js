'use strict';

const names = ['Ivan','AnN','Ksenia','Voldemart'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames)

const toLowerCase = names.map(function(item){
    return item.toLowerCase();
})

console.log(toLowerCase)

console.log(names.some((item) => typeof(item) === "number"))
console.log(names.every((item) => typeof(item) === "string"))

const arr = [1,2,3,4,5,6]

const res = arr.reduce((sum, cur) => sum + cur)
const res2 = names.reduce((sum, cur) => sum + "," + cur)
console.log(res)
console.log(res2)

const obj = {
    ivan: "person",
    ann: 'person',
    dog: 'animals'
}

const newArr = Object.entries(obj).filter(item => item[1] === "person").map(item => item[0])
console.log(newArr)