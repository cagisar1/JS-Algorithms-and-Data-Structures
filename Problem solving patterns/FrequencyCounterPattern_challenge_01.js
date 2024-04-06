// Write a function to check if two strings are anagrams 
// Time complexity - O(n)
function validAnagram(str1, str2){
    if(str1.length!=str2.length) return false;

    const counter={};

    for(let i=0; i<str1.length; i++){
        counter[str1[i]] = (counter[str1[i]] || 0) + 1;
    }

    console.log("After first loop: ", counter);

    for(let i=0 ; i<str2.length; i++){
        // if(str2[i] in counter)
        if (counter[str2[i]]){
            counter[str2[i]]--;
        }
        else return false;
    }

    console.log("After second loop: ", counter);

    // for(let key in counter){
    //     if(counter[key]!=0) return false;
    // }

    return true;
}

const result = validAnagram("rrac", "car");
console.log(result);