const merge = (arr1,arr2)=>{
    let a=0,b=0,i=0;
    let newArr=[];
    
    while(arr1[a]&&arr2[b]){
      if(arr1[a]<arr2[b]){
        newArr[i]=arr1[a];
        a++;
      }
      else{
        newArr[i]=arr2[b];
        b++;
      }
      i++;
    }
    if(arr1[a]){
      for(let k=a; k<arr1.length; k++){
        newArr[i] = arr1[k];
        i++;
      }
    }
    else {
      for (let k=b;k<arr2.length;k++) {
        newArr[i] = arr2[k];
        i++;
      }
    }
    return newArr;
  }
  
  
  const mergeSort=(arr, left, right)=>{
    if(left>=right) return arr[left];
    let mid = Math.floor((right+left)/2);
    let arr1 = mergeSort(arr,left,mid);
    let arr2 = mergeSort(arr,mid+1,right);
    return merge(arr1,arr2);
  }
  
  const merged=document.querySelector("#sorted");
  const nums=[2,1,3,-2];
  let newArr=mergeSort(nums,0,nums.length-1);
  merged.textContent=newArr;