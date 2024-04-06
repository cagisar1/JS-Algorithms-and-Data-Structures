// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// Time complexity O(n)
// Space Complexity(1)

const averagePair = (arr, avg)=>{
    if(arr.length<=1) return false;
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        if((arr[left]+arr[right])/2<avg){
            left++;
        }
        else if((arr[left]+arr[right])/2>avg){
            right--;
        }
        else return true;
    }
    return false;
}

console.log(averagePair([], 3.52));