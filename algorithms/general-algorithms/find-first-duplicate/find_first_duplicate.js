function findFirstDuplicate(arr) {
  const set = new Set();
  for (const value of arr) {
    if (set.has(value)) {
     return value
  }
  set.add(value)
 }
 return -1
} 

if (require.main === module) {

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;
