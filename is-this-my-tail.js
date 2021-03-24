//P: There are 2 parameters: bod (bod is a string) & tail(tail is a string).
//R: If, the last letter of bod is also the letter in tail, then return true; else false.
//E: ("Fox", "x") => true
//P: Get the last index of the body string and compare its value to the tail's.
function correctTail(body, tail) {
  
  let sub = body.substr(body.length-(tail.length))
  
  if (sub === tail) {
    return true
  }
  else {
    return false}

}
