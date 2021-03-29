const getData = require('../src/promise')
const API = 'https://swapi.dev/api/people/1/'

it('get information  name goku', () => {
  return getData(API).then(response => {
    expect(response.data.name).toBe('Luke Skywalker')
  })
})

// it('should fail due to invalid url', () => {
//   expect.assertions(1)
//   return getData('https://swapi.dev/api/people/2/').catch(err => expect(err).not.toBeNull())
// })