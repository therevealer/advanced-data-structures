class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.maxsize = 100;
    }

    getLength(){
        return this.tail - this.head;
    }

    isEmpty(){
        return this.getLength() === 0;
    }

    isFull(){
        return this.getLength() === this.maxsize;
    }

    enqueue(element){

        if(this.isFull()){
            return false;
        } else{
            this.queue[this.tail] = element;
            this.tail++
            return true;
        }
    }

    dequeue(){
        const item = this.queue[this.head];
        this.head++;
      return item;
    }

    peek() {
        return this.queue[this.head];
    }
}

module.exports = Queue;
