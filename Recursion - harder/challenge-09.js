// Write a function which accepts an object and 
// returns an array of all the values in the object that have a typeof string

 const collectStrings=(obj)=>{
    let stringArr = [];
    for(let key in obj){
        let aux = obj[key];
        if(typeof aux ==='object' && aux!== null){
            stringArr = stringArr.concat(collectStrings(aux));
        }
        else if(typeof aux ==='string'){
            stringArr.push(aux);
        }
    }
    return stringArr;
 }

 const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));