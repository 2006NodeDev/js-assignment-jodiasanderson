/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr)  {
    someStr = someStr.toLocaleLowerCase();
    return Array.from(someStr).toString() === Array.from(someStr).reverse().toString()
  }

  console.log(isPalindrome("noono"))
  
