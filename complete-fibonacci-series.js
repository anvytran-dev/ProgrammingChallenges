function fibonacci(n) {
   if(n <= 0) {
     return []
 } else {
   let num1 = 0;
   let num2 = 1;

   let result;

   let arr = [num1, num2];

   let count = 2;

    while (count < n) {
        //assign result to the addition of your first and second number
        result = num1 + num2;
        //assign num1 to num2
        num1 = num2;
        //assign num2 to the result
        num2 = result;
        //push each new result into the array we made.
        arr.push(result);
        //increase the count for our while loop
        count++;
    }
    //return arr[with the index of n]
   return arr
  }
  
}
