// Using inbuilt functions

function reverseString (str) { 
    return str.split("").reverse().join("");
}

let test = " hello world"
let result = reverseString(test);

console.log(result)


//Using a loop
function reverseStr(str){
let reversed = ""

    for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
    }

    return reversed;
}

let testing = " hello world"
let results = reverseStr(test);

console.log(result)