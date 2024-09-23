"use strict";
// static properties and methods
// =>in typescript, static methods and properties belong to the class itself rather than to instances of the class. by making methods and properties static, we can access them directly from the class without needing to create an instance of the class. this is useful for utility funtions or properties that don't rely on instance-specific data.
class MathOperations {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mul(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(2, 3));
console.log(MathOperations.sub(2, 3));
console.log(MathOperations.mul(2, 3));
console.log(MathOperations.div(2, 3));
