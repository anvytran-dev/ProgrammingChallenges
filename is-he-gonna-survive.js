function hero(bullets, dragons){

//P: bullets, dragons 
//R: True/False
//E: Hero has 2 bullets and faces 1 dragon: True
//Hero has 3 bullets and faces 2 dragons: False
//P:If # of bullets/# of dragons = 2 or more: True
//If # of bullets/#of dragons < less: False

  if(bullets / dragons >= 2){
    return true
  } else if (bullets / dragons < 2){
    return false
  }

