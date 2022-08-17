// given an array of integers and a target sum
// return true if any two integers add up to target

function hasTargetSum(array, target) {
  // a set is a data structure containing only unique values
  // initialize an empty Set
  const seenNumbers = new Set(); 
  // iterate through array
  for (const number of array) {
    // for current number, identify complimentarry number that adds target sum
    const complement = target - number;
    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;
      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
  }
  
  if (require.main === module) {

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  }
  
  module.exports = hasTargetSum;