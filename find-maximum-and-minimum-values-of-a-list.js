//P: There is one parameter: an array named 'list'
//R: Return the minimum number in the array. Return the maximum number in the array.
//E: [1, 2, 3, 4, 5]--> min: 1, max: 5
//P: Use the sort method to sort the numbers from min to max, then max to min. 

var min = function(list){
  
    list.sort(minNumber);
  
    function minNumber(a, b) {
      
      return a - b
    }
  
    return list[0];
}

var max = function(list){
    
    list.sort(maxNumber);
  
    function maxNumber(a, b) {
      
      return b - a
      
    }
  
    return list[0];
}
