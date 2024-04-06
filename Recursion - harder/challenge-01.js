// Write a recursive function called reverse which 
// accepts a string and returns a new string in reverse.

const reverse = (str)=>{
    let rev = [];
    if(str.length===0) return rev;
    let last = str.length-1;
    rev.push(str.slice(last));
    return rev.concat(reverse(str.slice(0, last))).join("");
}

let string = "awesome";
console.log(reverse(string)); //emosewa

//Better version was :

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }