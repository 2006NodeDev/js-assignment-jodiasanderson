/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

console.log(fib(8))
function fib(n)
 {
    if (n<=1)
    return 1

    return fib(n-1) + fib(n-2)
}


