/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */


console.log(isEven(459891))

function isEven(someNum) {
  if ((someNum & 1)!=1)
  return true
  else 
  return false
}