//P: There is one parameter: numbers (which is an array).
//R: Return an array. The array should contain the numbers from the min.number to the max.number of the array.
//E: [6,9] => [6,7,8,9]
//P: Find the min. number + max. number of the array. Loop through each number from min to max. Push each number to an array.
function pipeFix(numbers){
  let arr = []
  for(i = (Math.min.apply(Math, numbers)); i < (Math.max.apply(Math, numbers)+ 1); i++) {
    arr.push(i)
  }
  
  return arr
}
