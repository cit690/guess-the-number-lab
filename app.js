

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  getGuess: function(){
    let guess ;
    do{
    guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`))
    }
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) 
    
    return guess

  }

,
  play: function() {
    while (this.getGuess !== this.secretNum) {
      return this.prevGuesses.push(this.getGuess())
      
      
    }

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
  } ,
  

  }

 
console.log(game.getGuess())
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


