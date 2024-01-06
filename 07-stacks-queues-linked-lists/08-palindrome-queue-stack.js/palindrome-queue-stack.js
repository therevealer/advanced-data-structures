const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    const charStack = new Stack();
    const charQueue = new Queue();

    for (let i = 0; i < cleanedStr.length; i++){
        const char = cleanedStr.charAt(i);
        charQueue.enqueue(char)
        charStack.push(char);
    }

    while(!charQueue.isEmpty()){
        if(charQueue != charStack){
            return false
        }
    }

    return true;
}

module.exports = isPalindromeQueueStack;
