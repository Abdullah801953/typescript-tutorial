// static properties and methods
// =>in typescript, static methods and properties belong to the class itself rather than to instances of the class. by making methods and properties static, we can access them directly from the class without needing to create an instance of the class. this is useful for utility funtions or properties that don't rely on instance-specific data.

class MathOperations{
    public static PI:number=Math.PI;
    public static add(num1:number,num2:number):number{
     return num1+num2;
    }
    public static sub(num1:number,num2:number):number{
     return num1-num2;
    }
    public static mul(num1:number,num2:number):number{
     return num1*num2;
    }
    public static div(num1:number,num2:number):number{
     return num1/num2;
    }
    
}
console.log(MathOperations.PI);
console.log(MathOperations.add(2,3));
console.log(MathOperations.sub(2,3));
console.log(MathOperations.mul(2,3));
console.log(MathOperations.div(2,3));