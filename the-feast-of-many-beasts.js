//P: There are two parameters: strings named 'beast' + 'dish'
//Return true or false, based off if the condition is fulfilled.
//E: beast = blue monkey; dish = danish pastry; TRUE
//P: Use the charAt() string method to identify the characters. Use a conditional 
//statement and comparison operators to compare the characters. 
function feast(beast, dish) {
  let firstLetterBeast = beast.charAt(0);
  let lastLetterBeast = beast.charAt(beast.length - 1);
  let firstLetterDish = dish.charAt(0);
  let lastLetterDish = dish.charAt(dish.length -1);
  
  if(firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish) {
    
    return true; 
    
  } else {
    
    return false
  }
  
  
}
