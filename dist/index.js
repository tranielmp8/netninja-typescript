"use strict";
// Intersection Types
// GENERIC & REPRESENTS THE INTERSECTION OF HasID
function addIdToValue(val) {
    const id = Math.random();
    return { ...val, id };
}
const post = addIdToValue({ title: 'Super Happy', thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
