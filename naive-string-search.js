// Write a function which checks how many times a given substring appears in a given string

const stringSearch = (arr, str)=>{
    if(str.length===0) return 0;
    if(str.length>arr.length) return 0;
    if(str.length===arr.length && str[0]!==arr[0]) return 0;
    let count = 0;
    for (let i=0; i<arr.length;i++){
        if(str[0]===arr[i]){
            let ok=1;
            for(let k=i+1,j=1;j<str.length;j++,k++){
                if(str[j]!==arr[k]){
                    ok=0;
                    break;
                }
            }
            if(ok) count++;
        }
    }
    return count;
}

console.log(stringSearch("wo", ""));