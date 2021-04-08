//P: There is one paramter: an array of strings.
//R: Return the string that corresponds with the score.
//E: ['life', 'eating', 'life'] => 'Super happy!'
//P: Find the score of each array through a loop, then see which string that the score corresponds with. 

function paul(x){
  let score = 0
  
  for(i= 0; i < x.length; i++) {
    
    if(x[i] === 'life') {
      score = score + 0
    } else if (x[i] === 'Petes kata') {
      
      score = score + 10
    } else if(x[i] === 'eating') {
      
      score = score + 1
    } else if (x[i] === 'kata'){
      score = score + 5
    }
  }
  
  if(score < 40 ) {
    return 'Super happy!'
  } else if(score >= 40 && score < 70) {
    return 'Happy!'
  } else if(score >= 70 && score < 100) {
    return 'Sad!'
  } else if(score > 100) {
    return 'Miserable!'
  }  
}

