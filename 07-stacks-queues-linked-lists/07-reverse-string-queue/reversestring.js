// Using in
function reverseString (str) { 
    return str.split("").reverse().join("");
}

let test = " hello world"
let result = reverseString(test);

console.log(result)