function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
  
}

// function disemvowel(str) {
//   let word = ""
//     for(let letter of str) {
//       if(letter != "a" && letter != "e" && letter !="i" && letter != "o" &&
//         letter != "u" && letter != "A" && letter !="E" && letter != "I" &&
//         letter != "O" && letter != "U") {
//         word = word + letter
//       }
//     }
//     return word
// }
