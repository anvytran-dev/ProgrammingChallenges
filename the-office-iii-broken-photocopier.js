//P: There is one parameter: a string of '1' and '0'
//R: Return the string but replace the '1' with '0' and vice versa.
//E:'1010' => '0101'
//P: Use a for of loop to loop through the string. Push new values to a new string.

function broken(x){
  let newBinary = ""
  
  for(char of x) {

    if(char === '1') {
      char = '0'
      newBinary = newBinary + char
      
    } else if (char === '0') {
        char = '1'

        newBinary = newBinary + char
    }
    
  }

  return newBinary
 
}

