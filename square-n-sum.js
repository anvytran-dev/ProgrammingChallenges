//P: There is one parameter: an array named 'numbers'
//R: Square each of the numbers in the array, then add them up. Return the sum. 
//E: [1, 2] => (1^1) + (2^2) = 5
//P: Use the forEach method to loop through each element and square them. 
//Then, use the reduce method to reduce the sum of all the new array elements. 

function squareSum(numbers){
  
  if(numbers.length === 0) {
    
      return 0;
    
  } else {
  
    numbers.forEach(squareThenSum);
  
      function squareThenSum(value, index) {
    
        numbers[index] = value * value
    
   }}
  
  return numbers.reduce((a,b) => a + b)
  
}
