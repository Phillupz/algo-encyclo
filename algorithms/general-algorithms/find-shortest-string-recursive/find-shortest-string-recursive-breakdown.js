function findShortestStringRecursive(arr) {
  // create condition to end recursion based on arr.length
  if (arr.length === 1) {
    return arr[0];
  }

  const result = findShortestStringRecursive(arr.slice(1));
  // removes first element of array, returns shortest string and assigns to variable
  // calling this function interupts the execution of the first call, and so on, creating a call stack

  console.log("arr =>", arr, "arr[0] =>", arr[0], "result =>", result, "slice =>", arr.slice(1), "shortest =>", arr[0].length <= result.length ? arr[0] : result)
  
  return arr[0].length <= result.length ? arr[0] : result;
  // compares the length of the first string of array to shortest string returned from function call
  // this process of slice and comparison is repeated until last element
  // after all functions have been called, the execution of the call stack begins
  // console.log() is a function and as such, is also added to the call stack
  // we can see the execution order printed below
}

// TERMINAL:
  //Expecting: 'a'
  // arr[0] => ccc
  // arr => [ 'bb', 'ccc' ] arr[0] => bb result => ccc slice => [ 'ccc' ] shortest => bb
  // arr => [ 'a', 'bb', 'ccc' ] arr[0] => a result => bb slice => [ 'bb', 'ccc' ] shortest => a
  // arr => [ 'aaa', 'a', 'bb', 'ccc' ] arr[0] => aaa result => a slice => [ 'a', 'bb', 'ccc' ] shortest => a
  // => a

if (require.main === module) {

  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;
