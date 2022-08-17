function recursiveSearch(arr, target) {
  // write condition to end recursion depending on arr.length return false
  if (arr.length === 0) {
    return false;
  }
  // if first element is the target return true
  if (arr[0] === target) {
    return true
  }
  // return recursiveSearch function passing in the target and
  // a slice of the array excluding the checked element
  return recursiveSearch(arr.slice(1), target)
}

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

