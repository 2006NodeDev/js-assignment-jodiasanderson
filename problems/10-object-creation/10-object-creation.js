/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let person ={ name: "Jodi Sand", age: "11"};
console.log(person)

function Person(name, age){
this.name = name;
this.age = age;
}

let aperson = new Person('Jodi Sand', '11')
console.log(aperson)

class Theperson{
  constructor(name, age)  {
  this.name =name; 
  this.age = age; 
    }
}
let p = new Theperson( "Jodi Sand", "11" )
console.log(p)