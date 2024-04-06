// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (arr)=>{
    if(arr.length===0) return 0;
    let chars = {};
    let longest = 0, start=0;
    for(let i=0; i<arr.length; i++){
        let char = arr[i];
        if(chars[char]){
            start = Math.max(start, chars[char]);
        }
        longest = Math.max(longest,i-start+1);
        chars[char]=i+1;
        }
        return longest;
    }

console.log(findLongestSubstring('thecatinthehat'));
