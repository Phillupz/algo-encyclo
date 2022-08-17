function findShortest(arr) {
  return arr.reduce((shortest, str) => str.length < shortest.length ? str : shortest)
}

if (require.main === module) {
  console.log("Expecting: 'a'");
  console.log("=>", findShortest(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortest(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");
}

module.exports = findShortestString;
