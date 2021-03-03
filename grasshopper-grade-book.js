//P: There are three parameters: s1, s2, s3. Each of the parameters represent a score.
//R: Return the letter value of the average of the 3 scores.
//E: 90 + 95 + 96 = 281/3 = 93.6666, A
//P: Get the average by adding the 3 numbers and dividing by 3. Assign the quotient to a variable.
//Use conditional statement, if the average is >= 90 and <= 100, return 'A'.

function getGrade (s1, s2, s3) {
    
  let aver = (s1 + s2 + s3) / 3
  
  if(aver >= 90 && aver <= 100) {

    return 'A';
    
  } else if (aver >= 80 && aver < 90) {
    
      return 'B';
    
  } else if (aver >= 70 && aver < 80) {
    
      return 'C';
    
  } else if (aver >= 60 && aver < 70) {
    
      return 'D';
    
  } else if (aver >= 0 && aver < 60) {
    
      return 'F';
    
  }
  
}
