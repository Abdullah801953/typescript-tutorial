// interface vs type

// 1:
// use custom types when you need unions, intersections, or mapped types.
// use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
// interfaces can extend other interfaces to inherit their numbers.
// custom types can use unions and intersections for more complex type compositions.

// same interface name treated as one

// type StudentAdd = {
//   country: string;
//   city: string;
// };
// type StudentCourse = {
//   courseType: string;
//   totalSub: number;
// };
// const student: StudentAdd & StudentCourse = {
//   country: "india",
//   city: "delhi",
//   courseType: "btech",
//   totalSub: 5,
// };

interface Stud {
  name: string;
  age: number;
}
interface StudAddr {
  city: string;
  state: string;
}
interface Data extends Stud, StudAddr {};
// const Biodata: Data = {
//   name: "vinod",
//   age: 23,
//   city: "pune",
//   state: "delhi",
// };
// console.log(Biodata);

class Biodata implements Data {
    name: string;
    age: number;
    city: string;
    state: string;
  constructor(name: string, age: number, city: string, state: string) {
    this.name=name;
    this.age=age;
    this.city=city;
    this.state=state;
  }
}
const std1: Biodata = new Biodata("abdullah", 23, "delhi", "delhi");
console.log(std1.name);
