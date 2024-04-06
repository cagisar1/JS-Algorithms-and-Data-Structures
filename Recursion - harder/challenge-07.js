// Given an array of words write a recursive function which 
// returns a new array containing each word capitalized.

const capitalizeWords = (arr)=>{
    if(arr.length === 0) return arr;
    let capitalizedArr = [];
    let word = arr[0];
    capitalizedArr.push(word.toUpperCase());
    return capitalizedArr.concat(capitalizeWords(arr.slice(1,)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));