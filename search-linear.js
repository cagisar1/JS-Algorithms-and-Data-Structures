// Write a function called linearSearch which accepts an array and a value, 
// and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.

function linearSearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
      for(let i=0;i<arr.length;i++){
          if (arr[i]===num) return i;
      }
      return -1;
  }

  linearSearch([1,2,5,6,15,765,324,57,34,-1,34,-29], -1); //9
  linearSearch([1,2,5,6,15,765,324,57,34,-1,34,-29], 4); //-1