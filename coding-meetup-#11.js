//You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

//write a function that returns the average age of developers (rounded to the nearest integer). I

function getAverageAge(list) {
  let age = 0
  let length = list.length
  list.forEach(item => age += item.age)
  
  return Math.round(age/length)
}
