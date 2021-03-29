const getData = require('../src/promise')
const API = 'https://swapi.dev/api/people/1/'

it('Get information name Luke', async () => {
  const response = await getData(API)

  expect(response.data.name).toBe('Luke Skywalker')
})

it('URL invalidate', async () => {
  expect.assertions(1)
  try{
    await getData('asdasda')
  } catch(err){
    expect(err).not.toBeNull()
  }
})