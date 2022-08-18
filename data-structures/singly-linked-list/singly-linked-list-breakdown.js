// ***Singly Linked List***

// GENERAL: 

// Data structure where items are processed in first-in-first-out order (FIFO)
// Items dequeued from the front
// Two ends - front and a rear. 
// Items are added to the the rear of the queue until the queue is full
// We can use an array or linked list as underlying data structure

// NODE
// A node in a linked list is an object that has two attributes
  // Value:
    // Stores data we’re interested in retrieving, ex:
      // Integer
      // Array
      // String
      // Some object
  // Next
    // Points to the next node in the list
  // The very last node in the linked list will point to nothing so it’s next value may be undefined, null or nil, etc
    // This depends on the language being used and the implementation of the node class


// LinkedList class tracks the head of the list
// has one attribute: head

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  // iterate function traverses the entire LinkedList
  iterate(callback) {
    // count represents the total nodes traversed through
    let count = 0;
    // temp is a temporary reference to the current node
    let temp = this.head;
    // while their are nodes remaining in LinkedList
    while (temp !== null) {
      // the callback function is passed into the iterate function when called
      // we pass the current node and the count to callback
      // callback returns true or false
      const result = callback(temp, count);
      // if result of callback is true 
      if (result === true) {
        // return the current node
        return temp;
      }
      // increment the count and move on to the next node
      ++count;
      temp = temp.next;
    }
    // return the current head ?
    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(node => console.log(node.value));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    // declere variable to represent result
    let result = null;
    // call iterate method passing in callback function 
    // think of the iterate method in this sense as a filter method
    // it will iterate over LinkedList and return the node that meets condition
    this.iterate(node => {
      if (node.value === target) {
        result = node;

        return true;
      }
    });
    // return node that matches target
    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    // move head to the next node
    node.next = this.head;
    // set new node as head
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    // if LinkedList is empty set head to node
    if (this.head === null) {
      this.head = node;
      return;
    }
    // otherwise, iterate over array until the last node
    this.iterate(currNode => {
      if (currNode.next === null) {
        // set the next node after the last to node passed in and return true
        currNode.next = node;
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    // declare variable representing the old head
    const oldHead = this.head;
    // if there is a node at head of LinkedList
    if (this.head !== null) {
      // set the next node after current head node to be new head node
      this.head = this.head.next;
    }
    // then return the oldHead
    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    // if there is no head or no node after head
    if (this.head === null || this.head.next === null) {
      // call removeFirst() function which should return null or undefined
      return this.removeFirst();
    }
    // declare variable to represent the oldTail node
    let oldTail = null;
    // iterate over LinkedList
    this.iterate(node => {
      // if there is no node after the next node
      // then we know we are one node away from tail of LinkList
      if (node.next.next === null) {
        // set oldTail equal to the last node
        oldTail = node.next;
        // set last node as null, removing it from linkedList
        node.next = null;
        return true;
      }
    });
    // return the node removed from list reference by oldTail variable
    return oldTail
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    // if replacing node at first index
    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node);
      return node;
    }
    // iterate through LinkList
    this.iterate((currNode, count) => {
      // if the node at current index matches the index passed in
      if (count === idx - 1) {
        // node.next has a value of null
        // we have to update the next attribute
        // change null to equal the node after the node we'd like to replace
        node.next = currNode.next.next;
        // then replace node after current iteration with the node
        // passed in to replace method
        currNode.next = node;

        return true;
      }
    });
    // return the node passed in
    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if (idx === 0) {
      this.addFirst(node);
      return;
    }

    this.iterate((currNode, count) => {
      // if the index of node at current iteration matches index passed in
      if (count === idx - 1) {
        // declare variable to represent the node after current node
        const oldNext = currNode.next;
        // insert new node into the position after current node
        currNode.next = node;
        // set the next attribute of the new node to the node that 
        // previously occupied the position it replaced
        node.next = oldNext;

        return true;
      }
    });
  }

  // remove the node at the given index, and return it
  remove(idx) {
    // if idx is first node
    if (idx === 0) {
      // return removeFirst method
      return this.removeFirst();
    }
    // otherwise, declare a variable to represent the old node
    let oldNode = null;
    // call iterate method
    this.iterate((node, count) => {
      // if the index of node at current iteration matches idx passed in
      if (count === idx - 1) {
        // capture node selected for removal by:
        // setting oldNode to equal the node after current iteration
        oldNode = node.next;
        // replace the next node with the node after that
        node.next = node.next.next;

        return true;
      }
    });
    return oldNode;
  }
  
  clear() {
    this.head = null;
  }
}


// node class has two attributes:
  // next and value
// providing default values allows a new node to be instantiated
  //  without passing in arguments
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  // create new instances of Node and LinkedList class

  let head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  let list = new LinkedList(head);
  let emptyList = new LinkedList();
  let oneItemList = new LinkedList(new Node('just one'));
  // log methods

  console.log("Print one to four");
  list.print();
  console.log("-----------------------------");

  console.log("Handle empty list print");
  emptyList.print();
  console.log("-----------------------------");

  console.log("Handle one item list print");
  oneItemList.print();
  console.log("-----------------------------");

  console.log(`Find four`);
  console.log(`${list.find('four').value}`);
  console.log(`Find non-existent value`);
  console.log(`Nothing: ${list.find(50)}`);
  console.log(`Find in empty list: ${emptyList.find(20)}`);
  console.log(`Find just one in one item list: ${oneItemList.find('just one').value}`);
  console.log(`Find nothing in one item list: ${oneItemList.find('nothing')}`);
  console.log("-----------------------------");

  console.log("Add zero as head");
  list.addFirst(new Node('zero'));
  list.print();
  console.log("-----------------------------");

  console.log("Add zero as head to empty list");
  emptyList.addFirst(new Node('zero'));
  emptyList.print();
  emptyList.head = null;
  console.log("-----------------------------");

  console.log("Add zero as head to one item list");
  oneItemList.addFirst(new Node('zero'));
  oneItemList.print();
  oneItemList.head = oneItemList.head.next;
  console.log("-----------------------------");

  console.log("Add five as tail");
  list.addLast(new Node('five'));
  list.print();
  console.log("-----------------------------");

  console.log("Add whaaa as tail to empty list");
  emptyList.addLast(new Node('whaaa'));
  emptyList.print();
  emptyList.head = null;
  console.log("-----------------------------");

  console.log("Add whaaa as tail to one item list");
  oneItemList.addLast(new Node('whaaa'));
  oneItemList.print();
  oneItemList.head.next = null;
  console.log("-----------------------------");

  console.log("Remove first node zero and return it");
  console.log(`${list.removeFirst().value} was removed`);
  list.print();
  console.log("-----------------------------");

  console.log("Remove first node from an empty list");
  console.log(`${emptyList.removeFirst()} was removed`);
  emptyList.print();
  console.log("-----------------------------");

  console.log("Remove first node from one item list");
  console.log(`${oneItemList.removeFirst().value} was removed`);
  oneItemList.print();
  oneItemList.head = new Node('just one');
  console.log("-----------------------------");

  console.log("Remove last node five and return it");
  console.log(`${list.removeLast().value} was removed`);
  list.print();
  console.log("-----------------------------");

  console.log("Remove last node from empty list and return it");
  console.log(`${emptyList.removeLast()} was removed`);
  emptyList.print();
  console.log("-----------------------------");

  console.log("Remove last node from one item list and return it");
  console.log(`${oneItemList.removeLast().value} was removed`);
  oneItemList.print();
  oneItemList.head = new Node('just one');
  console.log("-----------------------------");

  console.log("Replace node at index and return inserted node");
  console.log(`replace middle two with 2: ${list.replace(1, new Node('2')).value}`);
  list.print();
  console.log(`replace zeroth one with 1: ${list.replace(0, new Node('1')).value}`);
  list.print();
  console.log(`replace tail four with 4: ${list.replace(3, new Node('4')).value}`);
  list.print();
  console.log(`replace middle three with 3: ${list.replace(2, new Node('3')).value}`);
  list.print();
  console.log("-----------------------------");

  console.log("Insert node at index");
  console.log("Insert at 0");
  list.insert(0, new Node('zero'));
  list.print();
  list.removeFirst();

  console.log("Insert at 2");
  list.insert(2, new Node('two'));
  list.print();

  console.log("Insert at 4");
  list.insert(4, new Node('four'));
  list.print();

  console.log("Insert at 6");
  list.insert(6, new Node('six'));
  list.print();
  list.removeLast();

  console.log("Insert at 0 in empty list");
  emptyList.insert(0, new Node('zero'));
  emptyList.print();
  emptyList.removeFirst();
  console.log("-----------------------------");

  head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  list = new LinkedList(head);

  console.log("Remove the node at the index and return it");
  console.log(`Remove two: ${list.remove(1).value}`);
  console.log(`Remove tail four: ${list.remove(2).value}`);
  console.log(`Remove three: ${list.remove(1).value}`);
  console.log(`Remove one: ${list.remove(0).value}`);
  list.print();
  console.log("-----------------------------");

  console.log("Clear a list");
  head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  list = new LinkedList(head);
  list.clear();
  list.print();
}

module.exports = {
  Node, LinkedList
};
