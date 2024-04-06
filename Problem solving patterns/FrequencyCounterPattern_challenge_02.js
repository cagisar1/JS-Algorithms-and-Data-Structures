//Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time complexity O(n)

const sameFrequency = (x, y) => {
    x = x.toString();
    y = y.toString();

    if(x.length!== y.length) return false;
    let frequency = {};

    for(let i=0;i<x.length;i++){
        let val = x[i];
        frequency[val] = (frequency[val] || 0) + 1;
    }

    for(let i=0;i<y.length;i++){
        let val = y[i];
        if(frequency[val]){
            frequency[val]-=1;
        }
        else return false;
    }
    return true;
}

console.log(sameFrequency(23245, 242513));