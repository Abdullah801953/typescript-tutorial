// tuples in typescript
// =>in typescript, tuples are a data stsructure that allows you to stroe a fixed-size collection of elements of different types. they are similar to arrays, but with a key difference: the type of elements in a tuples are fixed and declared at the time of creation, whereas arrys can hold elements of the same type, and their size can vary.

// real-life example of using tuples in typescript:

// lest consider a scenario where you wnat to represent aperson's basic information,, including their name, age, and whether they have a driver's license. using a tuple can be an appropriate choice because tese three elements have a specific order and type.

// defining a tuple type for person information
type personInfo = readonly [string, number, boolean];//readonly likhne se ham iss me kuch bhee add nahi kar sakte
const person1: personInfo = ["abdullah", 23, true];
const person2: personInfo = ["vinod", 24, false];

// function to display person information
const personInformation = (person1: personInfo): string => {
  const [name, age, licence] = person1;
  return `name ${name} age ${age} licence ${licence}`;
};
console.log(personInformation(person1));
