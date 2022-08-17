function recursiveCount(num = 0) {
  if (num === 10) return;
    console.log(num)
    recursiveCount(++num)
}

 recursiveCount()

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;
