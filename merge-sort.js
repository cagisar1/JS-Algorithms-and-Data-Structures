const merge = (arr1,arr2)=>{
    let l1=arr1.length;
    let l2=arr2.length;
    let a=0,b=0;
    let newArr=[];
    while(a<l1 && b<l2){
      if(arr1[a]<arr2[b]){
        newArr.push(arr1[a]);
        a++;
      }
      else{
        newArr.push(arr2[b]);
        b++;
      }
    }
    while(a<l1){
      newArr.push(arr1[a++]);
    }
    while(b<l2){
      newArr.push(arr2[b++]);
    }
    return newArr;
  }
  
  
  const mergeSort=(arr)=>{
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftArr=mergeSort(arr.slice(0,mid));
    let rightArr=mergeSort(arr.slice(mid));
    return merge(leftArr,rightArr);
  }
  

  const nums=[2,1,3,0,1,9,5,-2];
  let newArr=mergeSort(nums);
  console.log(`New Array is ${newArr}`);