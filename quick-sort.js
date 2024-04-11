const swap = (arr,i,j)=>{
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

const partition = (arr, left, right)=>{
    let piv = Math.floor(Math.random()*(right-left))+left;
    swap(arr,left,piv);
    let pivot = arr[left];
    let p = left;
    for(let i=left+1;i<=right;i++){
        if(arr[i]<pivot) {
            p++;
            if(p!==left) swap(arr,i,p);
        }
    }
    swap(arr,left,p);
    return p;
}

const quickSort = (arr,start,end) => {
    if(start<end){
        let pivot = partition(arr,start,end);
        quickSort(arr,start,pivot-1);
        quickSort(arr,pivot+1,end);
    }
}

let nums = [35,1,14,-3,5,6,39,0,56,34,-5,4,3];
quickSort(nums,0,nums.length-1);
console.log(`Sorted array is ${nums}`);