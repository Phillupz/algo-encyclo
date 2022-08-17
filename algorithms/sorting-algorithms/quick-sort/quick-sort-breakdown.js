// ***Overview***

// sorts in place, no new arrays are created
// the mergeSort algorithm uses a divide and conquor method
// it divides the array into partitions based on low and high elements
// every function in the call stack has its own low and high
// every call of the partition functions returns a new pivot index

// partition sorts array in place
// takes in the entire array, low index and high index
// iterates over portion indicated by low and high index
// if element at current index is greater than pivot,
  // then swap with element before the pivot
  // then swap the pivot with that element
// decrements pivotIndex since it has moved to the left

function partition(array, low, high) {

  const middle = Math.floor((high + low) / 2);
  const pivot = array[middle];

  [array[middle], array[high]] = [array[high], array[middle]];
  let i = low;
  let j = high;

  while(i < j) {
    
    if (array[i] <= pivot) {
      ++i;
      continue;
    }

    const beforePivot = j - 1;
    [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
    --j;
  }
    [array[j], array[high]] = [array[high], array[j]];
    return j;
}

// quick sort array takes in an array
// sets low and high to beginning and end of array by defualt
// if no sorting is needed just rturn array

function quicksort(array, low = 0, high = array.length - 1) {
  // if array is sorted return array
  if (low >= high) {
    return array;
  }
  // partition the array 
  // returns the index at which the array has been partitioned
  const pivotIndex = partition(array, low, high);
  // call quicksort on low half of partition
  quicksort(array, low, pivotIndex - 1);
  // call quicksort on high half of partition
  quicksort(array, pivotIndex + 1, high);
  return array;
}

if (require.main === module) {

  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 7, 3, 4]));
}

module.exports = quicksort;
