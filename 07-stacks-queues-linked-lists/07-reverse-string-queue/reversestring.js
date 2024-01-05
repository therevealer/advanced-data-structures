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


//Using a Stacks
function reverseStringWithStack(str){
    const stack =[];

    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }

    let reversedString = '';
    while(stack.length > 0){
        reversedString += stack.pop();
    }

    return reversedString
}
let originalString = 'Hello, World!';
let reversedString = reverseStringWithStack(originalString);
console.log(reversedString);
