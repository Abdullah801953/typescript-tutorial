"use strict";
// function overloading typescript generic
// when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(5, true);
const result2 = add("abdullah", "khan");
