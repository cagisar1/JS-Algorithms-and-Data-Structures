// Write a function which checks how many times a given substring appears in a given string

const stringSearch = (arr, str)=>{
    if(str.length===0) return 0;
    if(str.length>arr.length) return 0;
    if(str.length===arr.length && str[0]!==arr[0]) return 0;
    let count = 0;
    for (let i=0; i<arr.length;i++){
         for(let j=0;j<str.length;j++){
            if(str[j]!==arr[i+j]) break;
            if(j===str.length-1) count++;
            }
        }
    return count;
}

console.log(stringSearch("lorie loledll", "lol"));