//P: There is one parameter: array (which is an array containing number/s or is empty).
//R: Return a new array. If the number is positive, it must be negative in the new array and vice-versa.
//E: [1,-2,3,-4,5]) => [-1,2,-3,4,-5]
//P: Loop through the array. Use the Math.sign method to see if the number is negative or positive. 
//Next, use the (-)Math.abs method to convert the number. Then, push the changed number to a new array. Return the array.
function invert(array) {
  
  let newArray = [] 
  
  for(i = 0; i < array.length; i++) {
    
    if(Math.sign(array[i]) === 1){
      
      newArray.push(-Math.abs(array[i]))
                    
    } else if(Math.sign(array[i]) === -1){
      
      newArray.push(Math.abs(array[i]))
      
    } else if(array[i] === 0) {
      
      newArray.push(array[i])
    }
  }  
  return newArray
}
