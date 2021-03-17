//P: There are 2 parameters: arr1 and arr2.
//R: Join the arrays to create one array. Sort the array in ascending order.
//E: ([1,2,3,4], [5,6,7,8]) -> [1,2,3,4,5,6,7,8]
//P: Use .concat() to join the array, use .sort() to sort the array in ascending order
//use Set to remove any duplicates number
function mergeArrays(arr1, arr2) {
  let concatAndSortedArray = arr1.concat(arr2).sort(sortNumbers)
  
  function sortNumbers(a, b) {
    return a - b
  }
  
  let noDuplicatesArray = [...new Set(concatAndSortedArray)];
  
  return noDuplicatesArray
}
