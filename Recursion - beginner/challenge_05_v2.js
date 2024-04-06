// Write a recursive function which accepts a number and returns the nth number in the Fibonacci sequence.
// Used an array to store values already calculated for Fibonacci sequence
// A lot faster!!

const fib = (n, arr)=>{
    if(n==0) {
        arr[n] = 0;
        return 0;
    }
    if(n==1){
        arr[n] = 1;
        return 1;
    }
    if(!arr[n]) {
        arr[n] = fib(n-1, arr) + fib(n-2, arr);
    }
    return arr[n];
}


console.log(fib(50,[])); //317811