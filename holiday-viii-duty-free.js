//P: There are 3 parameters: normPrice, discount, and hol. They are all integers.
//R: Return the total number of items you would need to buy at its discounted price to pay for your holiday with the savings you gained.
//E: (normPrice === 12, discount === 50, hol === 1000) => 166
//P: Use arithmetic operators to figure out the savings and how many items to buy and Math.floor to round down.
//P: Savings = normPrice * discount/100; totalItems = hol/savings, Math.floor(totalItems)
function dutyFree(normPrice, discount, hol){
  
  let savingsPerItem =  normPrice * discount/100
  
  let totalItems = Math.floor(hol/savingsPerItem)
  
  return totalItems
  
}

