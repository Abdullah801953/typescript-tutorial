// abstract classes in typescript
// =>abstarct classes provide a way to define common properties and methods that multiple drived classes can share. this promotes code resuse and helps establish a common interface for related classes.
// =>abstract class can't be instatiated
// =>abstract classes focus on class inheritance and sharing common functionality.
// =>whteras the usecontext hook in react focuses on managing global state and allowing components to consume that state.

// =>example: shape hieracchy
// suppose you're building a graphics application, and you want to create a hierarchy of different shapes. you can use an abstract base class shape to define common properties and methods that all shapes share.

abstract class Shape {
  abstract calculateArea(): number;
  abstract displayArea(): void;
  shapName?: string;
}
class Circle extends Shape {
  r: number;
  constructor(shapName: string, r: number) {
    super();
    this.shapName = shapName;
    this.r=r;
  }
  calculateArea(): number {
    return Math.PI * this.r;
  }
  displayArea(): string {
    return `the shap is ${this.shapName} and the area of the shape is ${this.calculateArea()}`;
  }
}
const circleShape: Circle = new Circle("circle", 2);
console.log(circleShape.displayArea());

