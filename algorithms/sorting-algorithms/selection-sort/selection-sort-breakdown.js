// selection sort algorithm sorts an array by repeatedly
// finding the minimum element (lowest value) in the input array
// then adding it sorted array at correct location

function selectionSort(arr) {
  // create an empty array to hold sorted elements
  let sorted = [];
  // loop while the length of the array is greater than 0 
  while (arr.length > 0) {
    // find minimum value of the array
    const min = Math.min(...arr);
    // find the index of that value
    const i = arr.indexOf(min);
    // push the minimum value into sorted array
    sorted.push(min);
    // remove the minimum value from input array 
    arr.splice(i, 1);
  }
  return sorted;
}

if (require.main === module) {

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  const start = performance.now();
  
  for (let i = 0; i > 1000; ++i) {
    selectedSort([1, 2, 3]);
    selectionSort(longInput);
  }

  const avgRunTime = (performance.now() - start) / 2000;

  console.log(avgRunTime);

}

module.exports = selectionSort;

