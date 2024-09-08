// union in typescript
// union types allow you to specify that a variable can hold values of multiple types. you use the | (pipe) symbol to define a union type.

// in typescript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. failure to do so will result in a type error during compilation.

// const userName=(input:string | number | boolean):void=>{

// }
// userName('abdullah')
// userName(23)
// userName(true)

// const inputValue = (input: number | string) => {
//   if (typeof input === "number") {
//     return input * 2;
//   } else if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     console.log("invalid value type");
//   }
// };
// console.log(inputValue(23));
// console.log(inputValue("abdullah"));

// intersection in typescript
// intersection types allow you to combine multiple types into a single type. you use the & (ampersand) symbol to define an intersection type.

type user = {
  name: string;
  age: number;
};
type location = {
  country: string;
  city: string;
};
type userInformation = user & location;
const user1: userInformation = {
  name: "abdullah",
  age: 23,
  country: "india",
  city: "delhi",
};
const userProfile = (user1: userInformation): string => {
  return `name ${user1.name} age ${user1.age} country ${user1.country} city ${user1.city}`;
};
console.log(userProfile(user1));
