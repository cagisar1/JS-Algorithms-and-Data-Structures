// Write a function called minSubArrayLen which accepts two parameters 
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum 
// is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (arr, num) =>{
    if(arr.length==0) return 0;
    let sum = 0;
    let count= Infinity;
    let start = 0;
    let end = 0;
    while(start<arr.length){
        if(sum<num && end<arr.length){
            sum+=arr[end++];
        }
        else if(sum>=num){
            count = Math.min(count, end-start);
            sum-=arr[start];
            start++;
        }
        else break;
    }
    return (count==Infinity ? 0 : count);
}

let num = 34;
let array = [2,3,1,0,20,0,0,9,10,7,7,4];
console.log(minSubArrayLen(array, num));