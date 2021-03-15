//P: There is one parameter: an integer named 'mpg'. It represents the miles per imperial gallon.
//R:Convert miles per imperial gallon => kilometers per liter => round the 2nd decimal place. Return result.
//E: mph = 10; kpl = 3.54
//P: Use arithmetic operators to convert mpg => kpl, then use the toFixed() method to round to the second decimal place.
//The toFixed() method will result in a conversion from number to string. Use the Number() to get the result. 
function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  
  let miles = mpg 
  
  let kilometers = mpg * 1.609344  
  
  let litersPerGallon = 4.54609188

  let kpl = kilometers/litersPerGallon
  
  return Number(kpl.toFixed(2));
  
}
