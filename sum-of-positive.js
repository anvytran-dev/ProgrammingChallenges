//P: There is one parameter, it is an array.
//R: Return the sum of all the positive numbers in the array.
//E: [-1, 2, -3, 4, -5] => 2 + 4 = 6
//P: If the array is empty, return 0. If the array consist of all negative numbers, there is nothing
//to sum, return 0. If the array has positive numbers, loop through the array to push the positive numbers
//to a new array and then sum the numbers using the reduce method. 

function positiveSum(arr) {
  
  let arrPostiveNumbers = [];
  let negativeNums = i =>  {if (Math.sign(i) === -1) return true }

  
  if(arr.length === 0){
     return 0;
    
  } else if (arr.every(negativeNums) === true) {
    return 0;
    
  } else {
      for (i = 0; i < arr.length; i++) {
          if(Math.sign(arr[i]) === 1) {
              arrPostiveNumbers.push(arr[i]);
        }
      }
    }
  
  let add = (a, c) => a + c
      return arrPostiveNumbers.reduce((add));
  
}


