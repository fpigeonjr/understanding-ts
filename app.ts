const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] // tuple
} = {
  name: 'Frank',
  age: 42,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'],
}

// catches these errors
// person.role.push('admin') // works
// person.role[1] = 10 // not valid

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
