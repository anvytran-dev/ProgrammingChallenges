//Input is an array of strings
//Output is the first value with '***' between each of the letters
//sort the array alphabetically
//['ble', 'cle', 'ale'] => ['ale', 'ble', 'cle'] = 'a***l***e'
//['clean', 'prep', 'organize', 'announce'] => ['announce', 'clean', 'organize', 'prep'] => 'a***n***n***o***u***n***c***e'
function twoSort(s) {
  s.sort()
  let firstValue = s[0]
  console.log(firstValue)
  let newString = ""
  
  for(char of firstValue) {
    
    if(firstValue.indexOf(char) === firstValue.length - 1) {
      newString += char
    } else {
    char = char + '***'
    newString += char
  }}
    
  return newString 
}
