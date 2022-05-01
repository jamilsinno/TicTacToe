
// event listeners
// game in progress?
// which players turn is it (change player piece color)
// player choose x's or o's
// win conditions
// draw condition
// restart
// local storage player score
// make sure you cannot override players piece


class TicTacToe {
  constructor() {
    this.counter = 0
    this.isX = true
    this.gameEnd = false
    this.xNumWin = 0
    this.oNumWin = 0
    this.board = Array.from(document.querySelectorAll('div'))
    this.board.forEach(item => item.addEventListener('click', this.handlePlayer))
    this.button = document.querySelector('.button').addEventListener('click', this.resetGame)
  }
  
  checkWin = () => {
    if (this.board[0].innerText === this.board[1].innerText && this.board[1].innerText === this.board[2].innerText && this.board[0].innerText) {
      document.querySelector('h2').innerText = `${this.board[0].innerText} wins!`
      this.gameEnd = true
      if(this.board[0].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    } 
    else if (this.board[3].innerText === this.board[4].innerText && this.board[4].innerText === this.board[5].innerText && this.board[3].innerText) {
      document.querySelector('h2').innerText = `${this.board[3].innerText} wins!`
      this.gameEnd = true
      if(this.board[3].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[6].innerText === this.board[7].innerText && this.board[7].innerText === this.board[8].innerText && this.board[6].innerText) {
      document.querySelector('h2').innerText = `${this.board[6].innerText} wins!`
      this.gameEnd = true
      if(this.board[6].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[2].innerText === this.board[4].innerText && this.board[4].innerText === this.board[6].innerText && this.board[2].innerText) {
      document.querySelector('h2').innerText = `${this.board[2].innerText} wins!`
      this.gameEnd = true
      if(this.board[2].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[0].innerText === this.board[4].innerText && this.board[4].innerText === this.board[8].innerText && this.board[0].innerText) {
      document.querySelector('h2').innerText = `${this.board[0].innerText} wins!`
      this.gameEnd = true
      if(this.board[0].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[0].innerText === this.board[3].innerText && this.board[3].innerText === this.board[6].innerText && this.board[0].innerText) {
      document.querySelector('h2').innerText = `${this.board[0].innerText} wins!`
      this.gameEnd = true
      if(this.board[0].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[1].innerText === this.board[4].innerText && this.board[4].innerText === this.board[7].innerText && this.board[1].innerText) {
      document.querySelector('h2').innerText = `${this.board[1].innerText} wins!`
      this.gameEnd = true
      if(this.board[1].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }
     else if (this.board[2].innerText === this.board[5].innerText && this.board[5].innerText === this.board[8].innerText && this.board[2].innerText) {
      document.querySelector('h2').innerText = `${this.board[2].innerText} wins!`
      this.gameEnd = true
      if(this.board[2].innerText === 'X'){
        this.xNumWin++
        this.updateScore()
      }else{
        this.oNumWin++
        this.updateScore()
      }
    }else{
      this.counter++
      if(this.counter >8){
        document.querySelector('h2').innerText = 'tie game'
      }
    }
  }

  handlePlayer = (e) => {
    
    if(this.gameEnd){
      alert `Game is over`
      return
    }

    if(e.target.innerText){
      return alert('cant place here')
    }

    if (this.isX) {
      e.target.innerText = 'X'
      this.isX = false
    } else {
      e.target.innerText = 'O'
      this.isX = true
    }

    this.checkWin()
  }

  resetGame = () => {
    for(let i = 0; i<this.board.length; i++){
      this.board[i].innerText = ''
    }
    this.gameEnd = false
    this.isX = true
    document.querySelector('h2').innerText = ''
    this.counter = 0
  }

  updateScore = () => {
    document.querySelector('.scoreX').innerText = this.xNumWin
    document.querySelector('.scoreO').innerText = this.oNumWin
  }
}





let board1 = new TicTacToe()










