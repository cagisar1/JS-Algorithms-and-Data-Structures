// Write a function called isSubsequence which takes in two strings and checks whether 
// the characters in the first string form a subsequence of the characters in the second string.
// Recursive version

function isSubsequence(sub, arr, i, j){
    // if(sub.length>arr.length) return false;
    if(!arr[j]) return false;
    if(sub[i]==arr[j]){
        if(sub[i+1]){
            return isSubsequence(sub,arr,++i,++j);
        }
        else return true;
    }
    return isSubsequence(sub,arr,i,++j);
}

console.log(isSubsequence('ac', 'av', 0, 0));