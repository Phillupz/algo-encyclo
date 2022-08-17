function mergeSort(arr) {

if (arr.length < 2) {
  return arr;
}

  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))

  return merge(left, right)
}

function merge(arr1, arr2) {

  const result = [];

  while (arr1.length && arr2.length) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  return [...result, ...arr1, ...arr2]; 
}

if (require.main === module) {

  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;