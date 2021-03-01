//P: There is one parameter named num. It will have a number as its value.
//R: Return the sum of all the numbers from 1 to num. 
//E: Num = 5 => 1 + 2 + 3 + 4 + 5 = 15
//P: Use a loop to loop through each number from 1 to num. Increase i by 1 after each iteration
//so that i can represent each value from 1 to num.
//During each iteration, add the current sum to i. i represents each value from 1 to num since
//i begins at 1, increases by 1, and will reach the value of num before stopping. 

var summation = function (num) {
  
  let sum = 0;
  
  for(i = 1; i <= num; i++){

      sum += i    
  }
  
  return sum
}
