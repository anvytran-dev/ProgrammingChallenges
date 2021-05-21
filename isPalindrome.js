// function isPalindrome(str){
//   return str === str.split("").reverse().join("")
// }

// function isPalindrome(str){
//   let arr = str.split("")
//   let newStr = ""

//   for(let i = arr.length -1; i >= 0; i--){
//     newStr += arr[i]
//   }
//   return str === newStr
// }

function isPalindrome(str){
  let arr = str.split("")
  
  for(char of str){
    if(char != arr.pop()){
      return false
    }
  }
  return true
}

