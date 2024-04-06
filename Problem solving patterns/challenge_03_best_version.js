// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in
// Time complexity O(n log n)
// Space complexity O(1)

const areThereDuplicates = (...args)=>{
    return (new Set(args).size!==args.length);
}
console.log(areThereDuplicates());