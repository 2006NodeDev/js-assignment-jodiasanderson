/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

let fish = {name:"Fishy", color:"red", age:2};    

function objectProperties(someObj)
{
    let str = ' ';  
    let i;
    for (i in fish) {
      str += fish[i] + ' ';
      
    }
    console.log(str)
}
objectProperties(fish) 
