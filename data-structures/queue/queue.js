class Queue {
  constructor() {
    this.queue = [];
    this.limit = 10;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.queue.push(item);
    } else {
      throw new Error('Queue is full'); 
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.size();
  }

  isFull() {
    return this.size() === this.limit;
  }

  size() {
    return this.queue.length;
  }

  search(target) {
    return this.queue.indexOf(target);
  }

  print() {
    console.log(this.queue.join(' -> '));
  }
}

if (require.main === module) {
  const queue = new Queue();

  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 5', queue.search(5));
  console.log('peek while empty', queue.peek());

  for (let i = 0; i < 5; ++i) {
    queue.enqueue(i);
  }

  console.log('ADD ITEMS 0 TO 4');
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 3', queue.search(3));
  console.log('peek', queue.peek());
  queue.print();

  for (let i = 5; i < 10; ++i) {
    queue.enqueue(i);
  }

  console.log('ADD ITEMS 5 TO 9');
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('find 3', queue.search(3));
  console.log('peek', queue.peek());
  queue.print();

  console.log('dequeue', queue.dequeue());
  console.log('size', queue.size());
  console.log('is empty?', queue.isEmpty());
  console.log('is full?', queue.isFull());
  console.log('peek', queue.peek());
  queue.print();

  console.log('GENERATE ERROR');
  queue.enqueue(10);

  try {
    queue.enqueue(11);
  } catch(err) {
    console.log(err);
    queue.print();
  }
}

module.exports = Queue;
