

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guess: null,
  getGuess: function(guess){
    guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`))
  }

,
  play: function() {
    while (this.getGuess !== this.secretNum) {
      console.log(this.prevGuesses.push)
   
      
    }

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
  } ,
 

  }



// if(guess < this.secretNum){
      //   return alert('Guessed too low!')
      //    prevGuesses.push
      // } else if(guess > this.secretNum){
      //   return alert('Guessed too high!')
      //    this.prevGuesses.push
      // } else if(guess === this.secretNum){
      //   return alert('Congrats! You did it! You made ' + prevGuesses.length + 'guesses!')
      // } else {null}




 

 

//prompt('Guess a number between 1-100')


