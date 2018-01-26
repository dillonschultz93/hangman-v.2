const Letter = function(character) {
  this.letter = character
  this.correct = false
  
  if(this.letter === ' '){
    this.correct = true
  }
}

Letter.prototype.toString = function(){
  if(!this.correct && this.letter !== ' '){
    return '_'
  }
  return this.letter
}

Letter.prototype.userGuess = function(guess){
  if(guess === this.letter){
    this.correct = true
  }
  return guess === this.letter
  
}

module.exports = Letter  