// Write a recursive function called isPalindrome which 
// returns true if the string passed to it is a palindrome 
// (reads the same forward and backward).
//  Otherwise it returns false.

const isPalindrome = (str)=>{
    if(str.length ===0) return false;
    if (str.length===1) return true;
    let last = str.length-1;
    if(str[0]===str[last]) return isPalindrome(str.slice(1, last));
    return false;
}

let string = 'amanaplanacanalpanama';
if(isPalindrome(string)) console.log(`>>${string}<< is a palindrome!`);
else console.log(`${string} is not a palindrome`);