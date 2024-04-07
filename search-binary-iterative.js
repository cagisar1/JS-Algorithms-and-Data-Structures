// Write a function called binarySearch which accepts a sorted array and a value and 
// returns the index at which the value exists. Otherwise, return -1.

const binarySearch=(arr, val)=>{
    let left = 0; 
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if (val === arr[mid]) return mid;
        else if(val>arr[mid]) left = mid+1;
        else right=mid-1;
    }
    return -1;
}

let arr= [1,2,3,6,7,9,10,23,45,66,78,100];
console.log(binarySearch(arr, 9));