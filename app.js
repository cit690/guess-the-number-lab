const prevGuesses = [];


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      function getGuess(){
        let guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`)
        for(let i = 0; i <= 100; i ++)
      }
      if(guess < secretNum){
        return alert('Guessed too low!')
         prevGuesses.push
      } else if(guess > secretNum){
        return alert('Guessed too high!')
         prevGuesses.push
      } else if(guess === secretNum){
        return alert('Congrats! You did it! You made ' + prevGuesses.length + 'guesses!')
      } else {null}
  }

}











 

 

//prompt('Guess a number between 1-100')


