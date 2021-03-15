//P: There is one parameter: an integer named 's'.
//R: 'S' represents speed in km/hr. Use a formula to convert the speed from km/hr => cm per second. 
//Round down the integer.
//P: Use Math.floor to round down the integer. 

function cockroachSpeed(s) {
  return Math.floor(s * 27.7777777778)
}
