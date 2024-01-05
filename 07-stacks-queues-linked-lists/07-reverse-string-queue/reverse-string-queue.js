const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const queue = new Queue();

   for (let i = str.length - 1; i <= 0; i--){
     queue.enqueue(str[i]) 
   }

  const reversedString = ""
  while(queue.length > 0){
    reversedString+= queue.dequeue()
  }

  return reversedString;

};

module.exports = reverseStringWithQueue;
