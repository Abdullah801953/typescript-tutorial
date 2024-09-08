// generics in typescript
// generics in typescript allow you to create reusable components or  functions that can work with multiple data types.

function logAndReturn<Type>(input: Type): Type {
  return input;
}
console.log(logAndReturn<string>("abdullah"));
console.log(logAndReturn<number>(23));
console.log(logAndReturn<string>("india"));
