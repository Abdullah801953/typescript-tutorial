// type annotation
// ->type annotation are expressed by using a colon : followed by the desired type after the variable or function parameter declaration. there can be a space after hte colon.

// this is type annotaion example
// let myFavNum:number=786;
// let myFullName:string="abdullah khan";

// types in typescript are
// unknown
// any
// null
// void
// undefined
// number
// number enum
// bigint
// boolean
// never
// string
// symbol
// object
// string enum
// unique symbol
// Array
// tuple
// function
// constuctor

// type annotation advantages
// 1 type chacking in compile time

// number type
// ->aisa type hai jis me ham float,intger,aur number ko store kara sakte hai
// let num:number=2;
// let num2:number=2.1;
// let num3:number=-2;

// string type
// let myName:string="abdullah";

// boolien
// value true y false ho ge
// let isMyName:boolean=true;
// let isDone:boolean=true;
// let hasStarted:boolean=false;

// function isEven(num: number): boolean {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(2));

// function divisiableBy4And8(num: number): boolean {
//   if (num % 4 === 0 && num % 8 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(divisiableBy4And8(16))

// bigint
// let num:BigInt=9007199254740992n
// console.log(num);

// any type
// ->iss k andar ham kasi bhee type k value store kar sakte type annotation kuch bhee ho sakta hai
// let myFavNum:any=786;
// myFavNum="string"

// unknown type
// ->feature me iss ke value data k hisab se change hoti hai iss me ham kuch bhee value rakh sakte hai par agar ham string value store kara rha hai to wo khud ba khud string ho jaya ga
// let num:unknown=23;
// num="string";
// num=true;
// console.log(num);
