"use strict";
// interface vs type
;
// const Biodata: Data = {
//   name: "vinod",
//   age: 23,
//   city: "pune",
//   state: "delhi",
// };
// console.log(Biodata);
class Biodata {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const std1 = new Biodata("abdullah", 23, "delhi", "delhi");
console.log(std1.name);
