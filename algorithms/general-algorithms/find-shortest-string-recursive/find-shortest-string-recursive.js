function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const result = findShortestStringRecursive(arr.slice(1));
  
  return arr[0].length <= result.length ? arr[0] : result;
}

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
