function stringy(size) {
  var str = '';
  let letter = ""
  for (var i = 1; i <= size; i++) {
    if(i % 2 === 0) {
      letter = "0"
    } else {
      letter = "1"
    }
    str = str + letter  
 
  }
  return str;
}
