const Letter = require('./letter.js')

const Word = function(gameWord){
  this.lettersToGuess = gameWord.toLowerCase().split('').map(function(item){
    return new Letter(item)
  })
}

Word.prototype.renderOnScreen = function(){
  return this.lettersToGuess.map(function(item){
    return item.toString()
  }).join(' ')
}

Word.prototype.isTrue = function(guess) {
  let correctGuesses = 0
  return this.lettersToGuess.forEach(function(item){
    if(item.userGuess(guess)){
      correctGuesses ++
    }
  })
  this.renderOnScreen()
  return correctGuesses === this.lettersToGuess.length
}

module.exports = Word