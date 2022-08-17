function findShortestString(arr) {
  // declare a variable representing shortest element in the array set to arr[0]
  let shortest = arr[0]
  // for each element in array
  arr.forEach((str) => {
    // if the length of current element is less than current shortest element
    if (str.length < shortest.length)
    // set shortest element to current element
    shortest = str
  })
  // return shortest
  return shortest 
}

// when using array.prototype.reduce()
// first parameter represents the value returned from previous iteration
// second parameter represents current element being iterated over
// the first parameter is always set to arr[0] by default
// so, the above solution is equivalent to:

function findShortest(arr) {
  return arr.reduce((shortest, str) => str.length < shortest.length ? str : shortest)
}

// reduce() method is useful when for performing a simple operation on every iteration
// while storing the value returned from each iteration in a variable

if (require.main === module) {
  console.log("Expecting: 'a'");
  console.log("=>", findShortest(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortest(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));
  
}

module.exports = findShortestString;

