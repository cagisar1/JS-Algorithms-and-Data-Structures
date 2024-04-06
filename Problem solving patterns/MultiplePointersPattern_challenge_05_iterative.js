// Write a function called isSubsequence which takes in two strings and checks whether 
// the characters in the first string form a subsequence of the characters in the second string.
// Iterative version
// Time complexity O(n)
// Space complexity O(1)

const isSubsequence = (sub, arr)=>{
    if(sub.length>arr.length) return false;
    let i = 0, j = 0;
    while(j<arr.length){
        if(sub[i]==arr[j]) {
            if(!sub[i+1]) return true;
            else i++;
        }
        j++;
    }
    return false;
}

console.log(isSubsequence('sing', 'sitgn')); //false