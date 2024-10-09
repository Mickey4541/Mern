//Mapping over an array of user data to create a list of user cards.

const users = [
    { name: "Rajan", age: 23 },
    { name: "Ramesh", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Rajani", age: 20 },
];

let newArr = users.map(function (user) {
    return `<div><h3>${user.name}</h3></div>`
})