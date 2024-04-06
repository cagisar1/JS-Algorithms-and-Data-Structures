// Given a sorted list of integers find the first pair that sum 0
// Recursive version
// Time complexity - O(n)

function pairSumZero(nums, left, right){
    if(nums.length <= 1) return "There are no pairs in the given list of numbers to check if they sum up 0";
    if(left==right) return [];
    let pairs = [];
    let sum = nums[left] + nums[right];
    if(sum<0){
       return pairs.concat(pairSumZero(nums, ++left, right));
    }
    else if (sum>0){
        return pairs.concat(pairSumZero(nums, left, --right));
    }
    else {
        pairs.push([nums[left], nums[right]]);
        return pairs.concat(pairSumZero(nums, ++left, --right));
    }
}

let arr = [-50, -2, -1, 0, 1, 2, 50];
const result = pairSumZero(arr, 0, arr.length-1);
if(!result.length==0) console.log(result);
else console.log("No pair has summed up 0");