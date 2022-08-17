function findFirstDuplicate(arr) {
 // create a new Set() object of unique values
 const set = new Set();
 // for every value of array
 for (const value of arr) {
 // if set .has value, return value representing first duplicate
  if (set.has(value)) {
    return value
  }
 // else, .add the value to the set
  set.add(value)
 }
 // if no duplicates return -1
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

