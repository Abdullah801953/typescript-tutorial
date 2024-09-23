// interface in typescript
// in typescript, an interface is a powerful feature that allows you to define a contract for an object's shape. it specifies the properties and their types that an object must have to be considered of that particular interface type. interfaces are primarily used for type-checking during development and don not gnerate any javascript code at runtime.

interface Greet {
  name: string;
  age: number;
}
const greets: Greet = {
  name: "abdullah khan",
  age: 24,
};

const person = (greets: Greet): string => {
  return `hellow ${greets.name} your age is ${greets.age}`;
};
console.log(person(greets));

interface properties {
  name: string;
  price: number;
  quantity: number;
}
const product1: properties = {
  name: "biscute",
  price: 2300,
  quantity: 3,
};
const productBill = (product1: properties): string => {
  return `product is ${product1.name} quantity is ${product1.quantity} total price is ${product1.price}`;
};
console.log(productBill(product1));
