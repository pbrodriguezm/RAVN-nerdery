const axios = require('axios')
const API = 'https://swapi.dev/api/people/1/'

axios(`${API}/character`)
  .then(response => {
    return axios(`${API}/starships/${response.data[1].name}`)
  })
  .then(response => {
    console.log(response.data.name)
    return axios(`${API}/planets/${response.data.originPlanet}`)
  })
  .then(response => {
    console.log(response.data.name)
  })
  .catch(err => console.error(err))