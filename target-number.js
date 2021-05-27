const targetNumber = 30;
let times = 0 

function checkGuess(source){

  let num = Math.floor(source.length / 2) 
  let guess = source[num]
  
  times++

  if(guess === targetNumber) {
    console.log('completed')

  } else if(guess < targetNumber) {
    source = source.slice(num + 1)
    
    checkGuess(source)

  } else if(guess > targetNumber) {
    source = source.slice(0, num)
   
    checkGuess(source)
    
  }
  
 
  return `The function runs ${times}x before reaching ${targetNumber}.`
}



console.log(checkGuess([4, 6, 10, 11, 16, 25, 30, 40, 55, 60]))
