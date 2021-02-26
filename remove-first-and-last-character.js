//P: The parameter is a given string.
//R: Return the string without a first and last character.
//E: If the string is 'puppy,' return 'upp'.
//P: Use the slice method to get the string from index 1 to the second to last index. 

function removeChar(str){

  
  return str.slice(1, -1);
  
};
