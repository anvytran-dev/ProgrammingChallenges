//P: There is one parameter: 'x' which is a string of numbers.
//R: Return a string of numbers. At each index, if the string is less than 5, replace it with '1', if it's more than or equal to'5', replace it with '1'.
//E: '45385593107843568' => '01011110001100111'
//P: Use the replace method on the string. For each element, if the element is less than 5, make it '0'
//Else, make it '1'. Use the \d which indicates non-digit elements. Use /g to indicate all elements.
function fakeBin(x){
 return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
