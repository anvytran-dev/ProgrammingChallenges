function digitize(n) {
  n = n.toString()
  let array = []
  for(num of n) {
    array.push(Number(num))
  }
  return array
}
