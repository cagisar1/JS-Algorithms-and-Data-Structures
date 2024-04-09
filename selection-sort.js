const swap = (arr,i,j)=>{
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  const selectionSort = (arr)=>{
    for(let i=0;i<arr.length-1;i++){
      let min = i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[min]>arr[j]){ 
          min=j;
        }
      }
      if(min!==i) swap(arr,i,min);
    }
  }
  
let arr = [20,19,-2,3,14,35,6,99,-7];
selectionSort(arr);
console.log(arr);
