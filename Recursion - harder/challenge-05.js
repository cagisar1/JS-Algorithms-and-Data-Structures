// Write a recursive function - given an array of strings, 
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr){
    if(arr.length===0) return arr;
    let word = arr[0];
    let letter = word[0];
    let capitalizedWord = `${letter.toUpperCase()}${word.slice(1)}`;
    let newArr =[];
    newArr.push(capitalizedWord);
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
}

let words = ['car','taco','banana'];
console.log(capitalizeFirst(words));