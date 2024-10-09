//Grouping an array of object by a specific property(E.g: grouping user by roles)


const user = [
    { name: "john", age: 20, role: "admin" },
    { name: "johnson", age: 21, role: "user" },
    { name: "johnny", age: 22, role: "admin" },
];

let obj = {};

user.forEach(function (user) {
    if(obj[user.role]){
        obj[user.role].push(user);
    }else{
        obj[user.role] = [];
        obj[user.role].push(user);
    }
});
console.log(obj);
