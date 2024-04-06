// Write a function that accepts an array of integers and a number n.
// The function should calculate the maximum sum of n consecutive elementes in the array

function maxSubarraySum (arr,num){
    if(num>arr.length) {
        console.log(`There aren't enough elements in the array in order to calculate the sum of ${num} elements`);
        return;
    }
    let max=0, sum=0, i;
    for(i=0;i<num;i++){
        max+=arr[i];
    }
    sum = max;
    while(i<arr.length){
        sum = sum - arr[i-num] + arr[i];
        if(sum>max) max=sum;
        i++;
    }
    return max;
}

let n=4;
const nums = [4,2,6,7,3,12,6,1,0];
let res = maxSubarraySum(nums, n);
res && console.log(`The maximum sum of ${n} consecutive elements in the array [${nums}] is ${res}`);