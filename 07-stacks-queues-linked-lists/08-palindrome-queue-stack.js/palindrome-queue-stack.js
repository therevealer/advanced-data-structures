const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    const stack = new Stack();
    const queue = new Queue();

    for (let i = str.length - 1; i <= 0; i--){
        queue.enqueue(str[i]) 
    }

    const reversedString = "";
    while(!queue.isEmpty()){
    reversedString+= queue.dequeue()
    }



}

module.exports = isPalindromeQueueStack;
