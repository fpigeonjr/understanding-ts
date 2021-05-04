// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // tuple
// } = {
//   name: 'Frank',
//   age: 42,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author'],
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Frank',
  age: 42,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
}

// catches these errors
// person.role.push('admin') // works
// person.role[1] = 10 // not valid

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby)
}

if (person.role === Role.ADMIN) {
  console.log('is admin')
}