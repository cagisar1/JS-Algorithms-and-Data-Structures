function swap(arr,a,b){
    [arr[a], arr[b]]=[arr[b],arr[a]];
  }
  
  function bubbleSort(arr){
    for(let i=arr.length-1;i>=0;i--){
      let check=false;
      for(let j=0;j<i;j++){
        if(arr[j]>arr[j+1]) {
          swap(arr,j,j+1);
          check=true;
        }
      }
      if(!check) break;
    }
  }
  
let arr = [20,19,-2,3,14,35,6,99,-7];
bubbleSort(arr);
console.log(arr);