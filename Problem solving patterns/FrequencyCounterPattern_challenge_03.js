// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in
// Time and space complexity O(n)

function areThereDuplicates(...args){
    if(args.length<=1) return false;
    const counter = {};
    for(let i=0; i<args.length;i++){
        if(counter[args[i]]) return true;
        counter[args[i]] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 0, -1, 3));