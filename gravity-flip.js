const flip=(d, a)=>{
  
  return d === 'R' ? a.sort((y,z) => y - z) : a.sort((y,z) => z - y)
}
