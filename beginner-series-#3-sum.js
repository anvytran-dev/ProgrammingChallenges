function getSum( a,b ){
  let numArray = []
  if(a === b) {
    return a
  } else {
    let newArray = []
    newArray.push(a)
    newArray.push(b)
    let sortedArray = newArray.sort((a,b) => a - b)
    console.log(sortedArray)
    for(i = sortedArray[0]; i <= sortedArray[1]; i++) {
      numArray.push(i)
    }
    return numArray.reduce((a,c) => a + c)
  }
  
}
