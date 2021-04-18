function task(w, n, c) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  let workers = ['James', 'John', 'Robert', 'Michael', 'William']
  let dollars = n * c
  for(i = 0; i < 5; i ++) {
    if(days[i] === w) {
      return `It is ${w} today, ${workers[i]}, you have to work, you must spray ${n} trees and you need ${dollars} dollars to buy liquid`
    }
  }
}
