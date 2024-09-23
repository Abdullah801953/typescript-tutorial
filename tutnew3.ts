// inheritance in typescript
// =>inheritance allow a class to reuse the functionality of an existing class without rewriting it.

// inheritance is a mechanism in wwhich one class acquire the propery of another class. for example, achild inherits the traits of his/her parents.

class Developer {
  salary?: number;
  field?: string;
}
class Student extends Developer {
  name: string;
  age: number;
  gender: string;
  constructor(
    name: string,
    age: number,
    gender: string,
    salary: number,
    field: string
  ) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
    this.field = field;
  }
}
const person1: Student = new Student(
  "abdullah",
  23,
  "male",
  25000,
  "web developer"
);
console.log(person1.salary);
