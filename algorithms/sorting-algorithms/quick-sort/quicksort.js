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

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return array;
  }

  const pivotIndex = partition(array, low, high);

  quicksort(array, low, pivotIndex - 1);
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
