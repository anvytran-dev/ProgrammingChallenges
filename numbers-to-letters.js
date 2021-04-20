function switcher(x){
  let alphabet = [' ','?','!','a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', null]

  alphabet = alphabet.reverse()
  
  let string = ""

  for(h = 0; h < x.length; h++) {
    for(let i = 0; i < alphabet.length; i++) {
      if(i == x[h] ) {
        string += alphabet[i]
      } 
    }
  }

  return string
}
