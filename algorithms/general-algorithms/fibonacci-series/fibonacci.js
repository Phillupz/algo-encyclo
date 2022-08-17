function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let lastTwo = [0, 1];

  for (let i = 0; i < num - 1; ++i) {
    let sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum];
  }
  return lastTwo[1]
}

if (require.main === module) {

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
