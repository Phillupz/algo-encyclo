function fibonacci(num) {
  // if num is less than 2, return num
  if (num < 2) {
    return num;
  }
  // create array containing last two values of sequence
  let lastTwo = [0, 1];
  // write for loop incrementing by 1 until length of nth index which is num - 1
  for (let i = 0; i < num - 1; ++i) {
  // add last two values of sequence
    let sum = lastTwo[0] + lastTwo[1];
  // update last two elements in sequence with new values
    lastTwo = [lastTwo[1], sum];
  }
  // return the last value of array after completing iteration
  // this represents nth element
  return lastTwo[1]
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
