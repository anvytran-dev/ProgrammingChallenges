//P: This function has two parameters: numbers (which is an array of numbers) + divisor(a number).
//R: Return an array of the numbers that are divisible by the divisible. 
//E: [1,2,3,4,5,6], 3 => [3, 6]
//P: Use a for loop to loop through the array. If the element has a modulus of 0, then push the element to the array.

function divisibleBy(numbers, divisor){
  
  let array = []
  
  for(i = 0; i < numbers.length; i++) {
    
    if(numbers[i] % divisor === 0) {
      
      array.push(numbers[i])
      
    }
    
  }
  return array
}  
