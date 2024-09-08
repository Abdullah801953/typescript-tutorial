"use strict";
// union in typescript
// union types allow you to specify that a variable can hold values of multiple types. you use the | (pipe) symbol to define a union type.
const user1 = {
    name: "abdullah",
    age: 23,
    country: "india",
    city: "delhi",
};
const userProfile = (user1) => {
    return `name ${user1.name} age ${user1.age} country ${user1.country} city ${user1.city}`;
};
console.log(userProfile(user1));
