function whereIBelong(arr, num) {

  if(arr.length === 0) {
    let newArray = []
    newArray.push(num)
    return newArray.indexOf(num)
  }

  for(i = 0; i < arr.length; i++) {

    if( i != arr.length - 1 && arr[i] <= num && arr[i+1] >= num) {

       arr.splice(i+1, 0, num)
       return arr.indexOf(num)
   
      
    } else if (i === arr.length - 1 && arr[i] < num) {

        arr.push(num)
        console.log(arr)
        return arr.indexOf(num)
   
     } 
     
   }
      
}

(whereIBelong([10, 20, 30, 40, 50], 30))

