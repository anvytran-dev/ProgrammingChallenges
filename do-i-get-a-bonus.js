function bonusTime(salary, bonus) {

//P: Salary (integer) & Bonus (boolean)
//R: Total of Salary + Bonus
//E: $300, Yes Then $300 x 10 = $3000; $300, No Then $300
//P: If True, return the total of salary x 10. If False, return the salary.
  
if(bonus === true){
  return `£${salary * 10}`
  } else {
  return `£${salary}`
  }
  
}
