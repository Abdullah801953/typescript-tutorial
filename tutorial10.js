"use strict";
// call signature
// the function call signature refers to the declaration or definition of a function, which includes the functions name, parameters and return type. it defines the structure and type information of a function without including the functions implementation or body.
const student1 = {
    name: "abdullah",
    age: 23,
    greet: function (country) {
        return `i am from ${country}`;
    }
};
const introduction = (student1) => {
    return `welcome to my chennal my name is ${student1.name} and my age is ${student1.age}`;
};
console.log(introduction(student1));
console.log(student1.greet("india"));
