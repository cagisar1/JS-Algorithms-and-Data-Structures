// Write a function called recursiveRange which accepts a number and 
// adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(n){
    if (n==1) return 1;
    return n + recursiveRange(--n);
}

console.log(recursiveRange(100)); //5050