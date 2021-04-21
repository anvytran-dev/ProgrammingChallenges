function validSpacing(s) {
  let array = s.split("")

  let counter = 0
  
  if(array.length === 0) {return true}
  
  for(i= 0; i < array.length; i++) {
    if(array[0] === " " || array[array.length -1] === " ") {
      return false
    } 
  }
  
  for(j= 0; j < array.length; j++) {
   if(array[j] === " " && array[j+1] === " ") {
      counter++
    } 
  }
  
  if(counter > 0) {
    return false
  } else {
    return true
  }
  
  
}
