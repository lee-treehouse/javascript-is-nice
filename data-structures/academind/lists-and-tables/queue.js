class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    // i'm used to wrapping an array in the other direction, enqueing by pushing
    this.items.unshift(value);
  }

  dequeue() {
    // i'm used to dequeing by shifting
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    // to get a copy
    return this.items.slice();
  }
}

const queue = new Queue();

queue.enqueue("Max");
queue.enqueue("Manu");
queue.enqueue("Julie");

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());
