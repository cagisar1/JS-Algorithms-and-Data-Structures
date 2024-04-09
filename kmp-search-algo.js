// Write a function which checks how many times a given subpatterning appears in a given patterning
// Time complexity O(m+n)

const createLPSTable = (substr)=>{
    let lps = [];
    let k=0;
    lps.push(0);
    for(let i=1;i<substr.length;i++){
        if(substr[i]===substr[k]){
            k++;
        }
        else if(k!==0) k=0;
        lps.push(k);
    }
    return lps;
}

const checkSubstring = (str, pattern)=>{
    if(pattern.length===0 || pattern.length>str.length) return 0;
    let lps = createLPSTable(pattern);
    let count=0, j=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===pattern[j]){
            if(j!==pattern.length-1) j++;
            else{
                count++;
                j=0;
            }
        }
        else{
            if(j!==0) {
                j=lps[j-1];
                if(str[i]===substr[j]) j++;
                else j=0;
            }
        }
    }
    return count;
}

let arr="ababdcabcabababd";
let substr="ababd";
console.log(checkSubstring(arr, substr));