// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent.

const power = (base, exp)=>{
    if(exp==0) return 1;
    if(exp==1) return base;
    return base*power(base, --exp);
}

console.log(power(10,2)); //100s