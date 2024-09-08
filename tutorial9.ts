// type alias
// in typescript a tupe alias is a way to give a name to a specific type or combination of types. it allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. type aliases provide netter readablility, organization, and abstraction of complex types

// to define a type alias, ou use the type keyword followed by the alias name and the type definition.

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// };

// const student: Person = {
//   name: "abdullah",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "okhla",
//     country: "india",
//   },
// };
// type Product={
//     Name:string;
//     price:number;
//     quantity:number;
// }
// const product:Product={
//     Name:"Laptop",
//     price:1000,
//     quantity:5
// }

// function calculateTotalPrice(product:Product):number{
//     return product.quantity*product.price;
// }
// console.log(calculateTotalPrice(product))