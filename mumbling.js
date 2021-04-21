function accum(s) {
  s = s.toLowerCase()
  let array = s.split("")
  let string =""

  for(let i = 0; i < array.length; i++) {
    if(i === array.length - 1) {
      string = string + array[i].toUpperCase() + array[i].repeat(i) 
    } else {
      string = string + array[i].toUpperCase() + array[i].repeat(i) + "-"
    }
  }
  
  return string
}
