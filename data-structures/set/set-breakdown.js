// ***OVERVIEW***

// A set is a data structure that can store any number of unique values or elements.
// There are no repeating elements in a set.
// Many languages include sets as part of thier core language.
// We can also build our own using an object as the underlying data structure.
// This is beacuse objects only allow unique keys.
// All keys must have a value so if we attempt to add a duplicate key
// it will simply overwrite the value of the first.
// In JavaScript Objects are not iterable unless:
  // They impliment the iterable protocol
  // Therefor, for...of can't be used to iterate over its properties
  // An iterable is an array or a string

class MySet {
  constructor(iterable) {
    // The bang operator coerces a value to its truthy or falsey form
    // then returns the opposite.
    // When all three conditions return true
    // the bang operator returns false, throwing an error
    if (!(iterable === undefined ||
      // Array.isArray() determines is passed in value is an array
      Array.isArray(iterable) ||
      typeof iterable === 'string')) {
        throw new Error('MySet only accepts iterable or nothing on initialization'); 
    }

    //
    this.data = {};
    
    if (iterable) {
      for (const el of iterable) {
        // Srings and arrays need to be broken down by
        // their elements/characters then added to object.
        this.data[el] = true;
        }
      }
    }

  // Return number of elements in MySet.
  size() {
    return this.entries().length;
  }

  // add an item to MySet as is
  // MySet is an object so don't worry about arrays here
  // return the MySet instance
  add(item) {
    // we can add properties to an object by simply giving it a value
    this.data[item] = true;
    return this
  }

  // delete an item from MySet
  // return true if successful, otherwise false
  delete(item) {
    // if the set has the item delete it
    if (this.has(item)) {
      // the delete operator deletes a property from an object
      // it takes in the property we wish to delete
      delete this.data[item];
      return true;
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    // The double bang operator coerces a value
    // to it truthy or falsey form then returns it.
    // We read the value of the key with bracket notation
    // which returns true.
    return !!this.data[item]
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    // Object.keys returns an array of all the keys in an object
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

