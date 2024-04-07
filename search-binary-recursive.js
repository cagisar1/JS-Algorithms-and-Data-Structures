// Write a function called binarySearch.Given a sorted array and a value 
// it should return the index at which the value exists. Otherwise, return -1.

function binarySearch(arr,val,left,right){
    if(left>right) return -1;
    let mid = Math.floor((left+right)/2);
    if (val === arr[mid]) return mid;
    else if(val<arr[mid]) return binarySearch(arr, val, left, mid-1);
    else return binarySearch(arr, val, mid+1, right);
}

let nums=[1,2,3,6,7,9,10,23,45,66,78,100];
console.log(binarySearch(nums, 23, 0, nums.length-1)); //7
console.log(binarySearch(nums, -5, 0, nums.length-1)); // -1
console.log(binarySearch(nums, 100, 0, nums.length-1)); //11