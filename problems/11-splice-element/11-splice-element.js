/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let i = someArr.indexOf(index);
  if (i != -1) {
  someArr.splice(i, 1);
}
return someArr;
} 
console.log(spliceElement ([1,2,3,8],2))

