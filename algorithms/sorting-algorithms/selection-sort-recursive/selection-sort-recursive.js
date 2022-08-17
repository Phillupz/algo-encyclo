function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }
  let min = Math.min(...arr);
  let i = arr.indexOf(min);

  arr.splice(i, 1);

  const result = selectionSortRecursive(arr);

  result.unshift(min)
  
  return result
}

if (require.main === module) {

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

