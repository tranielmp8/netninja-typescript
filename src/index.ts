// Generic Interface


// making the interface a generic interface you can add <> and put T or anything you choose in it

interface Collection<T> {
  data: T[]
  name: string
}

const collectionOne: Collection<string> = {
  data: ['mario', 'luigi', 'peach'],
  name: 'Mario Characters'
}

const collectionTwo: Collection<number> = {
  data: [10, 15, 30, 9, 5, 6],
  name: 'Winning Lotto Numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length)

  return c.data[i]
}

const resultOne = randomCollectionItem<string>(collectionOne);
const resultTwo = randomCollectionItem(collectionTwo) // Typescript knows the type bc it was inferred by collectionTwo already having a type

console.log(resultOne);
console.log(resultTwo);









