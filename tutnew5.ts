// getter and setter in typescript
// =>in typescript classes, you can use getter and setter methods to control the accesss and modification of class properties. getter methods allow you t retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.

// the get method doesn't take any parameters, and the set method takes only one parameter.

// setter aur gatter dekhna me to method k tarah laga ga par ye ek class ke properties hoti hai

class department {
  depType?: string;
  totalStudent?: number;
  totalTeacher?: number;
}
class studentInfo extends department {
  name: string;
  private _age: number;
  address: string;
  constructor(
    name: string,
    _age: number,
    address: string,
    depType: string,
    totalStudent: number,
    totalTeacher: number
  ) {
    super();
    this.name = name;
    this._age = _age;
    this.address = address;
    this.depType = depType;
    this.totalStudent = totalStudent;
    this.totalTeacher = totalTeacher;
    // if (_age > 150 || _age <= 0) {
    //   throw new Error("age is not valid");
    // }
    // agar user student1.age ke value ko change kara ga tab yaha me value check nahi ho paya ge ku k ye if conditon constructor k andar hai aur constructor tab call hota hai jab us class k instance create hota hai ya use class ka object create hota hai to iss issue se bachna k leya ham setter function ka use karte hai
  }
  set age(age: number) {
    if (age > 150 || age <= 0) {
      throw new Error("age is invalid");
    } else {
      this._age = age;
    }
  }
  get age(): number {
    return this._age;
  }
  introduction(): string {
    return `hi, i am ${this.name} my age is ${this._age} and my depertment is ${this.depType}`;
  }
}
const student1: studentInfo = new studentInfo(
  "abdullah",
  23,
  "delhi",
  "b-tech",
  200,
  13
);
student1.age = 24;
console.log(student1.introduction());
console.log(student1.age);
