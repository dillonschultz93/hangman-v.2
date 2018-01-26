const wordBank = require('./randomWords.js');
const Word = require('./word.js')
const inquirer = require('inquirer')

const generateWord = function(){
  return wordBank[Math.floor(Math.random()*wordBank.length)]
}

const startGame = function() {
  const newWord = new Word(generateWord())
  console.log(newWord.renderOnScreen())
  console.log(newWord.isTrue(process.argv[2]))
}

startGame()
