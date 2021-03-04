//P: There is one paramter. It is a number that represents the # of days.
//R: Return the number of days times 40. If the number is 3 or greater, subtract 20 from the total.
//If the number is 7 or greater, subtract 50 from the total.
//E: d = 5; 5 * 20 = 100 - 20 = 80
//P: Write conditional statements. 


function rentalCarCost(d) {
  
  if(d <= 2) {
    
    return 40 * d
    
  } else if (d >= 3 && d <= 6) {
    
    return (40 * d) - 20
    
  } else if (d >= 7) {
    
    return (40 * d) - 50
    
  }
}
