function selectionSortRecursive(arr) {
  // condition to end recursion
  if (arr.length === 0) {
    return [];
  }
  // find lowest value in the arr
  let min = Math.min(...arr);
  console.log("arr =>", arr)
  // find index of that value
  let i = arr.indexOf(min);
  // remove that element from array
  arr.splice(i, 1)
  // call selectionSortRecursive function passing in array with removed element
  // calling this function interupts the execution of the previous call
  // this created a call stack
  // every stack has it's own functional scope
  const result = selectionSortRecursive(arr);
  console.log("result =>", result)
  // after each function has been inititiated, the call stack can begin execution
  // returns min from each array
  // adds min value to beginning of array
  result.unshift(min)
  console.log("min number pushed to beginning of array =>", min)
  // 
 return result
  
}

// visualiztion 

// Expecting: [-1, 2, 3, 5]
// arr => [ 3, -1, 5, 2 ]
// arr => [ 3, 5, 2 ]
// arr => [ 3, 5 ]
// arr => [ 5 ]

// *hits base case*
  // result => []
  // at this point the call stack begins to execute working backwards

// execution #1
  // min number pushed to beginning of array => 5
  // 5 is minimum value
  // result => [ 5 ]

// execution #2
  // out of [3, 5], 3 is min
  // min number pushed to beginning of array => 3
  // result => [ 3, 5 ]

// execution #3
  // min number pushed to beginning of array => 2
  // result => [ 2, 3, 5 ]

// execution #4
  // min number pushed to beginning of array => -1
  // => [ -1, 2, 3, 5 ]

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([1, -1, 8, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

