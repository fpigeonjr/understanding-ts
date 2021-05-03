const person = {
  name: 'Frank',
  age: 42,
  hobbies: ['sports', 'cooking'],
}

let favActivities: string[]
favActivities = ['Sports']
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
