function flyBy(lamps, drone){
  
  let lampsArray = lamps.split("")

  let light = "o"
  
  if(lamps.length < drone.length) {

    return light.repeat(lamps.length)
    
  } else {
    
   for(i = 0; i <  drone.length; i++) {
    lampsArray[i] = "o"
  }}
  
  return lampsArray.join("")
}
