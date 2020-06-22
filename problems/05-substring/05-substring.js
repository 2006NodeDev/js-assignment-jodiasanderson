/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex){
  if(startIndex<=endIndex)
  {
     console.log('', someStr[startIndex])
     substring(someStr, startIndex+1, endIndex)
  }   
  if(someStr === '') throw  'Input Incorrect';
  if (isNaN(startIndex)) throw 'Input Incorrect';
  if(isNaN(endIndex)) throw  'Input Incorrect';  
}
substring ('I love melons', 3, 7)