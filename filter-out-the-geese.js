function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  let newArray = birds.filter(element => !geese.includes(element))
  
    
   return newArray  
   
}

//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
