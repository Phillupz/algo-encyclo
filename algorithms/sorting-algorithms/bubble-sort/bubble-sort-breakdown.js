// ***OVERVIEW***

// Bubble sort is a simpler sorting algorithm
// Performs well for sorted lists or short lists but not for longer lists
// For this reason, the built in sorting functions included in programming languages don’t use bubble sort
// Sorts a list in place by modifying the original array
// Swaps elements when in incorrect order and iterates until completed
// When no swap occurs, array is sorted


function bubbleSort(arr) {
  // declare a boolean to determine if array is sorted
  let sorted = false;
  // use while loop to continue iterating until sorted is true
  while (!sorted) {
     // set sorted to true to catch when sorting complete and end while loop
    sorted = true;
    // for each element in the array
    arr.forEach((num, i) => {
      // if we reach the end of the array, don't do anything
      if (i === arr.length - 1) {
        return;
      }
      // if number at current index is greater than the next
      if (num > arr[i + 1]) {
        // swap the elements using the index
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // set sorted to false b/c sorting not complete
        sorted = false;
      }
    });
  }
  // return sorted array
  console.log("=>", sorted)
  return arr;
}

if (require.main === module) {

  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

