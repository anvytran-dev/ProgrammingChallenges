//P: There are 2 parameters: a (which is an array) and limit (which is a number).
//R: Return true or false. If every number in the array is less than or equal to the limit, return true.
//E: ([66, 101], 200) => true
//P: Loop through the array and compare the numbers. 

function smallEnough(a, limit) {
  
  for(i = 0; i < a.length; i++){
    
    if(a[i] > limit){
      return false;
    }
  }
  return true;
}



