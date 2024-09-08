// call signature
// the function call signature refers to the declaration or definition of a function, which includes the functions name, parameters and return type. it defines the structure and type information of a function without including the functions implementation or body.

// lets andd one function inside the object. it's more like creating a method in object

// very important=> call signatures are typically used inside object type notations to describe the shape of functions within object types.

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet:(country:string)=>string//call signature
};
const student1: Student = {
  name: "abdullah",
  age: 23,
  greet:function(country:string):string{
 return `i am from ${country}`
  }
};
const introduction = (student1: Student): string => {
  return `welcome to my chennal my name is ${student1.name} and my age is ${student1.age}`;
};
console.log(introduction(student1));
console.log(student1.greet("india"))
