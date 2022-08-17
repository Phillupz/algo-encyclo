function recursiveCount(num = 0) {
  // write condition to stop recursion
  if (num === 10) return;
  // log num
  console.log(num)
  // call recursiveCount function
  recursiveCount(++num)
}

// call recursive count
 recursiveCount()

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;
