// Generic Class

class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length)
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data
  }
  add(val: T): T[] {
    this.data.push(val)
    return this.data 
  }
}

interface User {
  name: string 
  score: number 
}

const users = new DataCollection<User>([
  {name: 'Kakashi', score: 100},
  {name: 'Sakura', score: 95},
  {name: 'Sasuke', score: 90},
])

users.add({name: 'Naruto', score: 92})

console.log('load one - ', users.loadOne())
console.log('load one - ', users.loadAll())







