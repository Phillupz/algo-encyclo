function selectionSort(arr) {
  let sorted = []
  while (arr.length > 0) {
    const min = Math.min(...arr)
    const i = arr.indexOf(min)
    sorted.push(min)
    arr.splice(i, 1)
  }
  return sorted
}

if (require.main === module) {

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK 
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  const start = performance.now()
  
  for (let i = 0; i > 1000; ++i) {
    selectedSort([1, 2, 3])
    selectionSort(longInput)
  }

  const avgRunTime = (performance.now() - start) / 2000

  console.log(avgRunTime)

}

module.exports = selectionSort;

