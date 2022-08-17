function fibonacci(n){
  if (n < 2) {
    return n
  }
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

