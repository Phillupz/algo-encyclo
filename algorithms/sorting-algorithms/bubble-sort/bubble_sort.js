function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    arr.forEach((num, i) => {

      if (i === arr.length - 1) {
        return;
      }

      if (num > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    });
  }
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
