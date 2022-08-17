// ***Overview***

// Uses divide and conquer approach to sorting elements
// Sorts small subsets, merges, then sorts and carries on until the array is sorted
// It is commonly implemented as a recursive algorithm
// Divide all elements into individual arrays
// Then sort and combine elements
// It’s common to declare two functions (or more) when implementing a merge sort
// The main function is recursive: it divides the list and merges
// The helper merges the pieces of the list into a sorted list and returns it

// ***how it works***
// Each function call contains it's own scope
// So, each time the mergeSort function is called, it has it's own identity for the array
// mergeSort function splits the array recursively until there's only one element in each array
// when the function catches the base case, the call stack begins it's execution
// on every execution, the left and right arrays contained in functional scope are passed down to merge function
// wile there are elements in both arrays, the first elements of each array are compared
// the smallest value is removed from array and pushed to results array
  // ex. 
  // previous = [1, 2] vs [4, 5]
  // becomes: resultsArr = [1] and the arrays being compared [2] vs [4, 5]
// when one array runs out of elements to be compared,
// the elements from the remaining array are combined with the result array
  // ex.
  // previous = [2] vs [4, 5]
  // becomes resultsArr [1, 2], remaining = [4, 5]
  // becomes [1, 2, 4, 5]
// then, the call stack begins the next execution

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
  console.log("arr1 =>", arr1)
  console.log("arr2 =>", arr2)

  const result = [];

  while (arr1.length && arr2.length) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  console.log("result =>", [...result, ...arr1, ...arr2])
  return [...result, ...arr1, ...arr2];
  
}

// ***Understanding the call stack***

// Expecting: [-10, 0, 2, 2, 5, 10, 20]

// FIRST CALL
// arr1 => [ -10 ]
// arr2 => [ 0 ]
// result => [ -10, 0 ]

// SECOND CALL
// arr1 => [ 10 ]
// arr2 => [ -10, 0 ]
// result => [ -10, 0, 10 ]

// THIRD CALL
// arr1 => [ 2 ]
// arr2 => [ 20 ]
// result => [ 2, 20 ]

// FOURTH CALL
// arr1 => [ 5 ]
// arr2 => [ 2 ]
// result => [ 2, 5 ]

// FIFTH CALL
// arr1 => [ 2, 20 ]
// arr2 => [ 2, 5 ]
// result => [ 2, 2, 5, 20 ]

// SIXTH CALL & FINAL
// arr1 => [ -10, 0, 10 ]
// arr2 => [ 2, 2, 5, 20 ]
// result => [-10,  0,  2, 2, 5, 10, 20]

// FINAL SORTED ARRAY
// => [
//   -10,  0,  2, 2,
//     5, 10, 20
// ]

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