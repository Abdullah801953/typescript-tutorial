// function overloading typescript generic
// when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't

function add<T,U>(a: T, b: U) {
  console.log(typeof a);
  console.log(typeof b);
}
const result1 = add<number,boolean>(5, true);
const result2 = add<string,string>("abdullah", "khan");
