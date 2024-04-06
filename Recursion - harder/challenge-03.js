// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.

const someRecursive = (arr, func)=>{
    if(arr.length === 0) return false;
    if(func(arr[0])) return true;
    return someRecursive(arr.slice(1), func);
}

const isEven = (num)=>{
    if (num%2===0) return true;
    return false;
}

let nums = [3,5,7,7,71, -1,3,-5];
if(someRecursive(nums, isEven)){
    console.log(`There is at least one even number in the [${nums}] array!`);
}else{
    console.log(`There is no even number in the [${nums}] array!`);
}