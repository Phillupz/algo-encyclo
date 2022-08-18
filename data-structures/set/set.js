class MySet {
  constructor(iterable) {
    if (!(iterable === undefined ||
      Array.isArray(iterable) ||
      typeof iterable === 'string')) {
        throw new Error('MySet only accepts iterable or nothing on initialization'); 
    }

    this.data = {};
    
    if (iterable) {
      for (const el of iterable) {
        this.data[el] = true;
        }
      }
    }

  size() {
    return this.entries().length;
  }

  add(item) {
    this.data[item] = true;
    return this
  }

  delete(item) {
    if (this.has(item)) {
      delete this.data[item];
      return true;
    }
    return false;
  }

  has(item) {
    return !!this.data[item]
  }

  entries() {
    return Object.keys(this.data)
  }
}

if (require.main === module) {
  let mySet = new MySet();
  console.log('empty', mySet);
  console.log('size', mySet.size());
  console.log('entries', mySet.entries());

  mySet = new MySet([1, 2, 1, 3]);
  console.log('with array [1, 2, 1, 3]', mySet);
  console.log('size', mySet.size());
  console.log('entries', mySet.entries());

  mySet = new MySet('hello');
  console.log('with string hello', mySet);
  console.log('size', mySet.size());
  console.log('entries', mySet.entries());

  console.log('');
  console.log('ADD STUFF');
  console.log(mySet.add('adding'));
  console.log(mySet.add(5));

  console.log('');
  console.log('HAS STUFF');
  console.log(mySet.has('adding'));
  console.log(mySet.has(10000));

  console.log('');
  console.log('DELETE STUFF');
  console.log(mySet.delete('adding'));
  console.log(mySet.delete(10000));
  
}

module.exports = MySet;

