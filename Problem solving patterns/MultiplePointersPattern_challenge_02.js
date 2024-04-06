// Count the unique values in a sorted given array, knowing that you can alter the original array
// Time complexity O(n)

const countUnique = (arr) => {
    if(arr.length == 0) return 0;
    let i=0;
    // using while
    let j=1;
    while(j<arr.length){
        if(arr[i]!=arr[j]){
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    // using for
    // for(let j=1; j<arr.length;j++){
    //     if(arr[i]!=arr[j]){
    //         i++;
    //         arr[i] = arr[j];
    //     }
    // }
    return i+1;
}

const nums = [1,2,2,3,4,7,19,100];
const res = countUnique(nums);
console.log(res);