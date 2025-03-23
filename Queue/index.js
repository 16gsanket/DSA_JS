class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.isEmpty() ? "null" : this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    for (let index = 0; index < this.queue.length; index++) {
      str += this.queue[index] + "\n";
    }
    return str;
  }
}

let newQueue  = new Queue();

newQueue.enqueue(100)
newQueue.enqueue(200)
newQueue.enqueue(300)
newQueue.enqueue(400)
newQueue.enqueue(500)
newQueue.enqueue(600)

newQueue.dequeue()

const l = newQueue.printQueue()
console.log(l)

console.log('size : ' , newQueue.size())
console.log('size : ' , newQueue.peek())
