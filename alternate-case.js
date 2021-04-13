function alternateCase(s) {
  
  let string =""
  
  for(let char of s) {
    
    if(char === char.toLowerCase()) {
      
      string = string + char.toUpperCase()
      
    } else if ( char == char.toUpperCase()) {
      
      string = string + char.toLowerCase()
    }
  }
  return string
}
