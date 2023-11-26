const base_url = 'https://superheroapi.com/api.php/1078122216886668'

const imgdiv = document.getElementById('img')
const newHeroBtn = document.getElementById('newHeroBtn')
const searchBtn = document.getElementById('search')
const searchInput = document.getElementById('searchInput')
const superHeroname = document.getElementById('superHeroname')
const superHeroPowerstats = document.getElementById('powerstats')

// Getting Super Hero Randomly
const getSuperHero = (id) => {
  // id -> base_url/id
  // json.image.url
  fetch(`${base_url}/${id}`)
    .then(response => response.json())
    .then(json => {
      const superHero = json
      console.log(superHero)
      getSuperHeroInfo(superHero)
    })
}

// Getting Super Hero By Searching Name
const getSearchSuperHero = (name) => {
  // name -> base_url/search/name
  // json.results[0].image.url
  fetch(`${base_url}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const superHero = json.results[0]
    console.log(superHero)
    getSuperHeroInfo(superHero)
  })
}

// Getting random super hero id
const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroBtn.onclick = () => getSuperHero(randomHero())

searchBtn.onclick = () => getSearchSuperHero(searchInput.value)

const statToEmoji = {
  combat: '⚔️',
  intelligence: '🧠',
  strength: '💪',
  power: '📊',
  speed: '⚡',
  durability: '🏋️'
}

const getSuperHeroInfo = (character) => {  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')

  superHeroname.innerHTML = `<h2>Name: ${character.name}</h2>`
  imgdiv.innerHTML = `<img src="${character.image.url}" height=250 width=250/>`
  superHeroPowerstats.innerHTML = `${stats}`
}