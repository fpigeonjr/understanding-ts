var person = {
    name: 'Frank',
    age: 42,
    hobbies: ['sports', 'cooking']
};
var favActivities;
favActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
