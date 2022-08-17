// ***Stack Class***

// General: 
// A stack is a data structure where items are processed in last-in-first-out order (LIFO)
// Like a stack of pancakes where the last item is eaten first
// Last item in the stack is known as the top
// First item pushed to the stack is known as the base
// We think of recursive problems in terms of stacks
// Each recursive call results in a stack frame being added to the stack
// When a problem needs to be solved depth-first it’s a good indication that we’ll be using recursion or implementing a stack
// We can implement a stack class with a number of data structures including arrays and linked lists
// When calculating Big O notation, it’s important to know the underlying data structure is since that’ll affect applications

// Implementation:
// The stack class already has two attributes:
// The stack itself (an array)
// Limit - integer representing the total number of items allowed in the stack at one time

class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (!this.isFull()) {
      this.stack.push(item);
    } else {
      throw new Error('Stack is full');
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop()
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.size() - 1]
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.size() === 0
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.size() === this.limit
  }

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    for (let i = -1; i >= -this.size(); ++i) {
      if (this.stack[this.size() + i] === target) {
        return Math.abs(i) - 1
      }
    }
    return -1
  }

  // print contents of stack: do not return the stack itself!
  print() {
    console.log(this.stack.join(' <- '))
  }
}

if (require.main === module) {
  // add your own tests in here
  // create new stack
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
