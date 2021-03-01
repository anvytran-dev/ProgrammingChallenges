//P: There are two parameters: teams and scores. An example of the parameters are (['Germany', 'Ukraine'], [2, 0])
//R: Return the string in the following format. "At match Germany - Ukraine, Germany won!"  
//E: (['Belgium', 'Italy'], [0, 2]) => "At match Belgium - Italy, Italy won!"
//P: First, we have to compare the numbers in the scores array to see which team won. 
//We do this by using the comparison operators to compare the array indexes. If the team associated with the first score wins, then
//we return the statement in string format according. If the numbers in the scores array are equal, return the statement 
//that indicates it is a draw. To create the string, we can use template literals to fill in the teams names.

function uefaEuro2016(teams, scores){

  if ( scores[0] > scores[1] ) {
    
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    
  } else if ( scores[0] < scores[1] ) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
      
  } else if ( scores[0] === scores[1] ) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
      
  }
}
