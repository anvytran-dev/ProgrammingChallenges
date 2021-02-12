function countSheeps(arrayOfSheep) {
//P: The array
//R: Number of Sheep present(true)
//E: If there are 10 true in the array, there are 10 sheep present
//P: Use for loop to go through each element of the array.
//If the element is true, push the element to a new array. Count the length of the new array.
  let newArray = []
  for(i = 0; i <= arrayOfSheep.length; i++){
      if (arrayOfSheep[i] === true){
        newArray.push([i])
      }
  }
  return newArray.length
}
