function plant(seed, water, fert, temp){

  let flower = ""

  if(temp >= 20 && temp <= 30) {

    for(h = 0; h < water; h++) {

    for (i = 0; i < water; i++) {
     flower += "-" 
      }

    for(index = 0; index < fert; index++) {
      flower += seed
      }  
    }

    return flower

  } else {

  for(j = 0; j < water; j++) {  
  
   for (i = 0; i < water; i++) {
     flower += "-" 
    }
  }
  
  flower +=seed

  return flower

  }
}
