//P: There is one parameter: an array of numbers.
//R: Return the product of multiplying all the numbers in the array.
//E: [2, 3, 4] => 2 * 3 * 4 = 24
//P: We can use a loop to loop through each element and multiply the element and the previous product.
//We can also use the reduce method.

function grow(x){
  
  let product = 1;
  
  for(i = 0; i < x.length; i++) {
      product *= x[i];
    
  }
  
  return product;
  
}

// function grow(x){
  
//   return x.reduce( (a, c) => a * c);
// }
