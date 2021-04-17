function switcheroo(x){
  let string =""
  for(char of x) {
    if(char === 'a') {
      char = 'b'
      string += char
    } else if (char === 'b') {
      char = 'a'
      string += char
    } else {
      string += char
    }
    
 }
return string
}
