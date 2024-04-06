// Write a recursive function called flatten which 
// accepts an array of arrays and returns a new array with all values flattened.

const flatten=(arr)=>{
    if(arr.length===0) return;
    let elem = arr[0];
    let newArr = [];
    if(Array.isArray(elem)){
        let aux = flatten(elem);
        if(aux) newArr = newArr.concat(aux);
    }
    else newArr = newArr.concat(elem);
    
    let aux = flatten(arr.slice(1,));
    if(aux) newArr = newArr.concat(aux);
    return newArr;
}

let nums = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
console.log(flatten(nums)) // [1,2,3]


// Better version is:

// function flatten(oldArr){
//     var newArr = []
//         for(var i = 0; i < oldArr.length; i++){
//           if(Array.isArray(oldArr[i])){
//                 newArr = newArr.concat(flatten(oldArr[i]))
//           } else {
//                 newArr.push(oldArr[i])
//           }
//     } 
//     return newArr;
//   }