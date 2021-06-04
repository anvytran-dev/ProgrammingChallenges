function bmi(weight, height) {
  let bmi = weight/Math.pow(height, 2)
  
  return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese'
//   if(bmi <= 18.5) {
//     return 'Underweight'
//   } else if(bmi <= 25.0) {
//     return 'Normal'
//   } else if (bmi <= 30.5) {
//     return 'Overweight'
//   } else if (bmi > 30) {
//     return 'Obese'
//   }
}
