//Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."


var Ball = function(ballType) {
  // your code goes here
  if(ballType === undefined) {
    this.ballType = 'regular'
  } else {
    this.ballType = ballType
  }
}
