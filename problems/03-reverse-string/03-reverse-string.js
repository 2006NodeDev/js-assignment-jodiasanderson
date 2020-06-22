/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
//console.log('Jodi')

//reverseStr('hello')
function reverseStr(someStr)
{  
    let newStr = ' ';
    
    for (let i = someStr.length-1; i>=0; i--)
    {
        newStr +=someStr[i];
    }
    return newStr
    }
console.log(reverseStr('Jodi'))
