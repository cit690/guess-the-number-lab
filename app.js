

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess())
      console.log(this.prevGuesses)
      console.log(this.render)
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum) 
      
  } ,
  
  getGuess: function(){
    let guess ;
    do{
    guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`))
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) 
    
    return guess

  },

  render: function(){
    if(guess < this.secretNum){
            return alert('Guessed too low!')
             prevGuesses.push
          } else if(guess > this.secretNum){
            return alert('Guessed too high!')
             this.prevGuesses.push
          } else if(guess === this.secretNum){
            return alert('Congrats! You did it! You made ' + this.prevGuesses.length + 'guesses!')
          } else {null}
    
  }

}

 
 //game.play()




 

 

//prompt('Guess a number between 1-100')


