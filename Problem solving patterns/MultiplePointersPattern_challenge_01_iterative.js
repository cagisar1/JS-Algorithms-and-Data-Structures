// Given a sorted list of integers find the first pair (or all pairs) that sum 0
// Iterative version
// Time complexity - O(n)

const pairSumZero = (nums) => {
    if(nums.length === 0) return "There are no pairs in the given list of numbers to check if they sum up 0";
    let left = 0;
    let right = nums.length-1;
    let pairs = [];
    do{
        let sum = nums[left] + nums[right];
        if(sum<0) {
            left++;
        }
        else if (sum>0) {
            right--;
        }
        else {
            // if finding the first pair to sum up 0, then return nums[left] and nums[right]
            pairs.push([nums[left], nums[right]]);
            left++;
        }
    }while(left<right);
    return pairs;
}

const result = pairSumZero([-4, -3, -2, 0, 1, 2, 5]);
if(result.length!=0) {
    console.log(result);
}else{
    console.log("No pair has summed up 0");
}