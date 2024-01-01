const Stack = require('./stack');

function reverseStringStack(str) {
    const stack = new Stack();

    if(str === ""){
        return "";
    }

    const characters = str.split('')
    for(const word of characters){
        this.stack.push(word)
    }

    let reverseStringStack = this.stack.pop(characters)

    return reverseStringStack.join("")
}

module.exports = reverseStringStack;
