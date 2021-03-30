//P: There is one parameter: 'n' which is a random non-negative number.
//Return the digits of the number within an array in reverse order.
//E: n = 35231 => [1,3,2,5,3]
//P: First, turn the number into a string. Use the .split() method to push the string to an array.
//Next, reverse the array. Then, turn the string into numbers using the Number() method. 
function digitize(n) {
  n = n.toString()
  return n.split("").reverse().map(element => Number(element))
}
