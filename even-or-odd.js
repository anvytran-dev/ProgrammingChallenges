function even_or_odd(number) {
//P: Number
//R: 'Even' or 'Odd'
//E: If the integer is 5, return 'Odd.' If the integer is 2, return 'Even.'
//P: If the modulus of the integer/2 is 0, return 'Even.' If not, return 'Odd.'
    if(number % 2 === 0){
      return 'Even'
    } else{
      return 'Odd'
    }
} 
