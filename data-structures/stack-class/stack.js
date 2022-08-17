class Stack {
  constructor() {
    this.stack = [];
    this.limit = 10;
  }

  push(item) {
    if (!this.isFull()) {
      this.stack.push(item);
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  isFull() {
    return this.size() === this.limit
  }

  size() {
    return this.stack.length
  }

  search(target) {
    for (let i = -1; i >= -this.size(); ++i) {
      if (this.stack[this.size() + i] === target) {
        return Math.abs(i) - 1
      }
    }
    return -1
  }

  print() {
    console.log(this.stack.join(' <- '))
  }
}

if (require.main === module) {

  const stack = new Stack();

  console.log('size', stack.size());
  console.log('is empty?', stack.isEmpty());
  console.log('is full?', stack.isFull());
  console.log('find 5', stack.search(5));
  console.log('peek while empty', stack.peek());

  // create new stack with array [0...4]
  for (let i = 0; i < 5; ++i) {
    stack.push(i);
  }

  console.log('ADD ITEMS 0 TO 4');
  console.log('size', stack.size());
  console.log('is empty?', stack.isEmpty());
  console.log('is full?', stack.isFull());
  console.log('find 3', stack.search(3));
  console.log('peek', stack.peek());
  stack.print();

  // create new stack with array [5...9]
  for (let i = 5; i < 10; ++i) {
    stack.push(i);
  }

  console.log('ADD ITEMS 5 TO 9');
  console.log('size', stack.size());
  console.log('is empty?', stack.isEmpty());
  console.log('is full?', stack.isFull());
  console.log('find 3', stack.search(3));
  console.log('peek', stack.peek());
  stack.print();

  console.log('pop', stack.pop());
  console.log('size', stack.size());
  console.log('is empty?', stack.isEmpty());
  console.log('is full?', stack.isFull());
  console.log('peek', stack.peek());
  stack.print();

  console.log('GENERATE ERROR');
  stack.push(9);

  try {
    stack.push(10);
  } catch(err) {
    console.log(err);
    stack.print();
  }
}

module.exports = Stack;
