// iterate from beginning to middle of string
// compare the letter we're iterating over to corresponding
  // letter at the end of the string
// if the letters don't match return false
// if we reach the middle and all letters match, return true

function isPalindrome(word) {
  // iterate over first half of word
  for (let i = 0; i < word.length / 2; i++) {
    // declare a variable to represent corresponding letter at end of string
    const j = word.length -1 - i
    // declare variable to represent starting char in string
    const startChar = word[i]
    // declare variable to represent ending char in string
    const endChar = word[j]
    // if letters don't match return false
    if (startChar !== endChar) return false
  }
  // if all letters match return true
  return true
}

if (require.main === module) {
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;