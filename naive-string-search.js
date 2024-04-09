// Write a function which checks how many times a given subpatterning appears in a given patterning
// Time complexity O(m*n)

const patterningSearch = (str, pattern)=>{
    if(pattern.length===0) return 0;
    if(pattern.length>str.length) return 0;
    let count = 0;
    for (let i=0; i<str.length;i++){
         for(let j=0;j<pattern.length;j++){
            if(pattern[j]!==str[i+j]) break;
            if(j===pattern.length-1) count++;
            }
        }
    return count;
}

console.log(patterningSearch("lolrie loledll", "lol"));