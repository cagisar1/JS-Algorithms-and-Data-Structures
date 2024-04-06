// Write a function which accepts a number and returns the factorial of that number
const factorial = (n)=>{
    if (n==0 || n==1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(7)); //5040