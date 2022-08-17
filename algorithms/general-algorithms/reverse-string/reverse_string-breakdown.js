function reverseString(str) {
  // declare an empty string
  let newString = "";
  // iterate through string being passed in starting at the end and decrementing
  for (let i = str.length - 1; i >= 0; i--) {
  // add the char at every index to new string using add and assignment operator
    newString += str[i];
  }
  return newString
}

if (require.main === module) {

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'catbaby'");
  console.log("=>", reverseString("ybabtac"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

