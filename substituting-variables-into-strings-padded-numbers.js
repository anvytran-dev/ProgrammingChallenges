function solution(value){
  value = value.toString()
  
  for(let i=value.length; i < 5; i++) {
     value = '0' + value
  }
  
  return `Value is ${value}`
  
}
