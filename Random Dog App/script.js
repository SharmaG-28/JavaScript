// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    dogImageDiv.innerHTML = `<img src='${json.message}' height=500 width=500/>`
  })
}

dogButton.onclick = () => {
  getNewDog()
}