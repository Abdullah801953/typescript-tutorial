"use strict";
// inheritance in typescript
// =>inheritance allow a class to reuse the functionality of an existing class without rewriting it.
// inheritance is a mechanism in wwhich one class acquire the propery of another class. for example, achild inherits the traits of his/her parents.
class Developer {
    salary;
    field;
}
class Student extends Developer {
    name;
    age;
    gender;
    constructor(name, age, gender, salary, field) {
        super();
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.field = field;
    }
}
const person1 = new Student("abdullah", 23, "male", 25000, "web developer");
console.log(person1.salary);
