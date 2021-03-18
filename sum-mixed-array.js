//P: There is one parameter --'x' is an array of integers as both stirngs + numbers.
//R: Return the sum of all the array values as a number.
//E: [9, 3, '7', '3'] -> 22
//P: Use .map() to convert array to array of all integers. Next, use .reduce() to find the sum of the array.
function sumMix(x){
    return x.map(Number).reduce((a,b) => a + b);
}
