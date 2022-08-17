function fibonacci(n){
  // if n is less than 2 return n
  if (n < 2) {
    return n
  }
  // fibonacci formula: f(n) = f(n -1) + f(n - 2)
  // return the fibonacci formula represented as code
  return fibonacci(n - 1) + fibonacci(n - 2)
}

if (require.main === module) {

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 89");
  console.log("=>", fibonacci(11));

  console.log("");

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

