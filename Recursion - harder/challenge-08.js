// Write a function which takes in an object and finds all of the values 
// which are numbers and converts them to strings.
// The exercise intends for you to create a new object with the numbers converted to strings, 
// and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj){
    let newObj = {};
    for(let key in obj){
        let aux = obj[key];
        if(typeof aux ==='object' && aux!== null && !Array.isArray(aux)){
            newObj[key] = stringifyNumbers(aux);
        }
        else{
            if(typeof aux === 'number'){
                aux = aux.toString();
            }
            newObj[key] = aux;
        }
    }
    return newObj;
}

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj1));