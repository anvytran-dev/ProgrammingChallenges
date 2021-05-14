// Problem: "Given a string of words, count all occurrences of every word."
// solve this by using a Map data structure in javascript

const words = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in egestas magna, Lorem in porta ipsum. Nulla nec elit purus. Sed rutrum vestibulum sapien, Sed vel ullamcorper neque pellentesque id. Nullam ullamcorper lacus non odio sagittis, nec faucibus diam sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi sem est, sagittis in nibh id, interdum sagittis tellus. Donec tristique efficitur neque vitae hendrerit. Aenean vestibulum quis ipsum non porta. Phasellus et velit sit amet nisi condimentum rutrum. Fusce ac vulputate lorem.`;

let mapWords = new Map()
let arr = words.toLowerCase().split("")
let regex = /[\w\s]/gi
let onlyWords = []
for(char of arr){
  if(char.match(regex)) {
    onlyWords.push(char)
  }
}
let onlyWordsArr = onlyWords.join("").split(" ")

let count = 1

onlyWordsArr.forEach(function(word){
    if(mapWords.has(word)){
      mapWords.set(word, mapWords.get(word) + 1)
    } else {
      mapWords.set(word, count)
    }
  }
)


