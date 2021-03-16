//P: There are 2 parameters: dadYearsOld and sonYearsOld.
//R: Return the number of years ago that the father was twice as old as his son
//E: dadYearsOld === 36; sonYearsOld === 7 -> 22 years ago
//P: Father's age - (son's age * 2)

function twiceAsOld(dadYearsOld, sonYearsOld) {
  
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}
