"use strict";
// Generic Class
class DataCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
const users = new DataCollection([
    { name: 'Kakashi', score: 100 },
    { name: 'Sakura', score: 95 },
    { name: 'Sasuke', score: 90 },
]);
users.add({ name: 'Naruto', score: 92 });
console.log('load one - ', users.loadOne());
console.log('load one - ', users.loadAll());
