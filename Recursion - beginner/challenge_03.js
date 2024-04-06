// Write a function which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr)=>{
    if(arr.length==0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,3,4,7])); //84