function generateShape(integer){

  let str = "+"
  
  let str1 = str.repeat(integer)
  
  let newLine = "\n"
  
  let finalStr = ""
  
  for(let i = 0; i < integer; i++) {
     finalStr += str1 + newLine
  }
  
  return finalStr.substr(0, finalStr.length -1)
  
}

//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
