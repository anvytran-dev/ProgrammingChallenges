//P: There is one parameter: a --which is an array of numbers
//R: Return the array but replace any number that is 97, 101, 105, 111, 117 with its character.
//E: [101,121,110] => ["e", 121, 110]
//P: Use conditional 'if' statements. If any of the numbers are the character code for the lower case vowels, then reassign the element to the vowel.
 function isVow(a) {
  for(i = 0; i < a.length; i++) {
    if (a[i] === 97) {
        a[i] = 'a'
    } else if (a[i] === 101) {
      a[i] = 'e'
    } else if (a[i] === 105) {
      a[i] = 'i'
    } else if (a[i] === 111) {
      a[i] = 'o'
    } else if (a[i] === 117) {
      a[i] = 'u'
    }
  }
  return a
}
