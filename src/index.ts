
// Intersection Types

// type Person = {
//   firstName: string 
//   id: number 
// }

// type User = Person & {
//   email: string 
// }

// Intersection Type Generics

interface HasID {
  id: number 
}

 // GENERIC & REPRESENTS THE INTERSECTION OF HasID
function addIdToValue<T>(val: T): T & HasID {
  const id = Math.random()

  return {...val, id}
}

interface Post {
  title: string 
  thumbsUp: number 
}

const post = addIdToValue<Post>({title: 'Super Happy', thumbsUp: 250});

console.log(post.id, post.title, post.thumbsUp)



