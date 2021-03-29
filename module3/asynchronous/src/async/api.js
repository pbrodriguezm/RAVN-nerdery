const axios = require('axios')
const API = 'https://swapi.dev/api/people/1/'

const getAllData = async () => {
  try {
    const starships = await axios(`${API}/starships`)
    const starship = await axios(`${API}/starships/${characters.data[1].name}`)
    const planetes = await axios(`${API}/starships/${character.data.originPlanet}`)
    console.log(starship.data.name)
    console.log(planetes.data.name)
  } catch (error) {
    console.error(error)
  }
}

getAllData()