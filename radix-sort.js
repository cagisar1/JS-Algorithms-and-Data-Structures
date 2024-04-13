function getDigit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10;
  }
  
  function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num)))+1;
  }
  
  function mostDigits(nums){
    let maxDigits=0;
    for(let i=0;i<nums.length;i++){
      maxDigits=Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
    let n = mostDigits(nums);
    for(let i=0;i<n;i++){
      let buckets=Array.from({length:10},()=>[]);
      for(let j=0;j<nums.length;j++){
        let digit = getDigit(nums[j],i);
        buckets[digit].push(nums[j]);
      }
      nums= [].concat(...buckets);
    }
    return nums;
  }
  
  let arr=[385,29,20,7,3819,47,2,5,84,9204];
  console.log(radixSort(arr));
