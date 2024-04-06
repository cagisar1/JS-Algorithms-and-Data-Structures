// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
// Time and space complexity O(n)

const areThereDuplicates = (...args)=>{
    if(args.length<=1) return false;
    args.sort((a,b) => {
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    });
    console.log(args);
    let i = 0;
    for(let j=1, i=0; j<=args.length;j++,i++){
        if(args[i]===args[j]) return true;
    }
    return false;
}
console.log(areThereDuplicates('a', 'b', 'c', 'a'));