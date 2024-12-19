"use strict";
// Generics 101
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// function logAndReturnValue(val: any): any {
//   console.log(val);
//   return val 
// }
// const result = logAndReturnValue('Hello'); ,<- any type is not ideal for typescript
function logAndReturnGenericValue(val) {
    console.log(val);
    return val;
}
const resultOne = logAndReturnGenericValue('kakashi');
const resultTwo = logAndReturnGenericValue(8);
const resultThree = logAndReturnGenericValue(true);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'kakashi', score: 100 },
    { name: 'jaraiyah', score: 90 },
    { name: 'naruto', score: 85 },
    { name: 'sakura', score: 80 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
