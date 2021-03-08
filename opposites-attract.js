//P: There are two parameters: flower 1 & flower2.
//R: Return true or false. If one flower has an even number of petals, and the other odd, return true.
//Else, return false. 
//E: If flower1 has 5 petals and flower2 has 8 petals, return true. 
//P: Write a conditional and use comparison + arthimetric operators. 

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 != 0){
    return true
  } else if (flower1 % 2 != 0 && flower2 % 2 === 0) {
    return true
  } else {
    return false
  }
}
