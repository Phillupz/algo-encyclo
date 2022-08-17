function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length -1 - i
    const startChar = word[i]
    const endChar = word[j]
    if (startChar !== endChar) return false
  }
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