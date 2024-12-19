"use strict";
// Generic Interface
const collectionOne = {
    data: ['mario', 'luigi', 'peach'],
    name: 'Mario Characters'
};
const collectionTwo = {
    data: [10, 15, 30, 9, 5, 6],
    name: 'Winning Lotto Numbers'
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo); // Typescript knows the type bc it was inferred by collectionTwo already having a type
console.log(resultOne);
console.log(resultTwo);
