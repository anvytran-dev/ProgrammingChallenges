//P: There is one parameter: str (which is a string).
//R: Replace all the . with - . Return the string. 
//E: "one.two.three" => "one-two-three"
//P: Use the replace method. Put a \ in front of the . This is because . is an arbitrary character in a regualr expression and we need to escape it with a \.

var replaceDots = (str) => {
  
  let regex = /\./gi;
  
  return str.replace(regex, '-');
  

}
