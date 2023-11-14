console.log('Hello')

let title = document.getElementById('title')

console.log('before: ', title.innerText)

let message = 'Good Bye HTML'
title.innerText = message;
console.log('after: ', title.innerText)

title.innerHTML = `<p>${message}</p`

title.style.backgroundColor = 'red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => {
//   console.log('you clicked red')
// }
// yellowDiv.onclick = () => {
//   console.log('you clicked yellow')
// }
// greenDiv.onclick = () => {
//   console.log('you clicked green')
// }

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

//for each
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
    //console.log(square.value)
  }
})


// function clearScores() 
const clearGameBtn = document.getElementById('clear-game')

clearGameBtn.onclick = () => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square =>{
      square.innerText = ''
    })
}