
// Generics 101

function logAndReturnString(val: string): string {
  console.log(val)
  return val 
}
function logAndReturnNumber(val: number): number {
  console.log(val)
  return val 
}
function logAndReturnBoolean(val: boolean): boolean {
  console.log(val)
  return val 
}

// function logAndReturnValue(val: any): any {
//   console.log(val);
//   return val 
// }

// const result = logAndReturnValue('Hello'); ,<- any type is not ideal for typescript

function logAndReturnGenericValue<T>(val: T): T {
  console.log(val);
  return val
}

const resultOne = logAndReturnGenericValue<string>('kakashi');
const resultTwo = logAndReturnGenericValue<number>(8);
const resultThree = logAndReturnGenericValue<boolean>(true);

// example 2

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length)

  return values[i]
}

interface User {
  name: string
  score: number 
}

const users: User[] = [
  {name: 'kakashi', score: 100},
  {name: 'jaraiyah', score: 90},
  {name: 'naruto', score: 85},
  {name: 'sakura', score: 80},
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser);



