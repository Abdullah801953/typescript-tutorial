"use strict";
// tuples in typescript
// =>in typescript, tuples are a data stsructure that allows you to stroe a fixed-size collection of elements of different types. they are similar to arrays, but with a key difference: the type of elements in a tuples are fixed and declared at the time of creation, whereas arrys can hold elements of the same type, and their size can vary.
const person1 = ["abdullah", 23, true];
const person2 = ["vinod", 24, false];
// function to display person information
const personInformation = (person1) => {
    const [name, age, licence] = person1;
    return `name ${name} age ${age} licence ${licence}`;
};
console.log(personInformation(person1));
