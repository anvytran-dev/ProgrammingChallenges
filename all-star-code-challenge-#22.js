//Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

//Any remaining seconds left over are ignored.

//Note:
//The string output needs to be in the specific form - "X hour(s) and X minute(s)"

//For example:

//3600 --> "1 hour(s) and 0 minute(s)"
//3601 --> "1 hour(s) and 0 minute(s)"
//3500 --> "0 hour(s) and 58 minute(s)"
//323500 --> "89 hour(s) and 51 minute(s)"

function toTime(seconds) {
  let newMinutes = Math.floor(seconds/60)
  let newHour = Math.floor(seconds/60/60)
  let newMin = Math.floor(Number('.' + (seconds/60/60).toString().split(".")[1]) * 60)
  
  if(seconds < 3600) {
    return `0 hour(s) and ${newMinutes} minute(s)`
  } else if (seconds === 3600) {
    return '1 hour(s) and 0 minute(s)'
  } else {
   
    return `${newHour} hour(s) and ${newMin} minute(s)`
  }
}
