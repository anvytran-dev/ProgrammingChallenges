//P: There is one parameter: x (which is a string or number).
//R: If x-squared is more than 1000, return 'It's hotter than the sun!!'; else 'Help yourself to a honeycomb Yorkie for the glovebox.'
//E: x = '50' => 'It's hotter than the sun!!'
//P: Use the Number method to convert the string to a number. Use the Math.pow method to find x-squared. Compare the value to 1000.
function apple(x){
  
  return (Math.pow(Number(x), 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ) 
 }
