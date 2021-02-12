//P: Month
//R: Return the quarter
//E: If February, then return 1
//P: Month divided by 3, round up


const quarterOf = (month) => (Math.ceil(month/3))
