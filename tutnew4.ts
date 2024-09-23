// access modifiers in typescript
//             |parent class| child class| outside class|
//             |------------|------------|--------------|
// public      |✅          |✅        |✅            |
// protected   |✅          |✅        |❌            |
// private     |✅          |❌        |❌            |

// parent class wo class jiss k properties ko other class inharite kara
// child class wo class jo parent se properties inharit kara
// parent class aur child class k baad jo bhee ham likhta hai wo outside class hota hai

// public access modifiers=>aisa access modifiers jise ham parent class, child class aur outside class me access kar sakte hai.

// protected access modifiers=>aisa access modifiers jise ham parent class, child class aur k andar access kar sakte hai.

// private access modifiers=>aisa access modifier jise ham sirf parent class k andar access kar sakte hai.

class Parent {
  public name: string = "abdullah";
  protected age:number=23;
  private pin:number=456;
  constructor(){
    const pin=this.pin;
    console.log(pin)
  }
}
class Child extends Parent {
  gender: string;
  constructor(gender: string) {
    super();
    this.name=this.name // public access inside child class
    this.gender = gender;
    this.age=this.age  // proctected access inside child class
    // this.pin=this.pin  // private not access inside the child class
  }
  
}
// const outsideClass: Child = new Child("male");
// console.log(outsideClass.gender)//public access outside the class
// console.log(outsideClass.age) //protected not access outside the class
// console.log(outsideClass.pin) // private not access outside the class
const anotherOutsideClass:Parent=new Parent();
