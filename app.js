const prevGuesses = [];


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

 function getGuess(){

 }

 prevGuesses.push()

//prompt('Guess a number between 1-100')

// if(guess < secretNum){
//   return alert('Guessed too low!')
// } else if(guess > secretNum){
//   return alert('Guessed too high!')
// } else if(guess === secretNum){
//   return alert('Congrats! You did it! You made ' + prevGuesses.length + 'guesses!')
// }
