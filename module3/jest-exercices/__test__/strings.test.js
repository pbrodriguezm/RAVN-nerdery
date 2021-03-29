
describe('email validation', () => {

  test('this is an email',() => {
    const email = 'email@ravn.co'

    expect(email).toMatch(/\S+@\S+\S+/)
  })

  test('this is not an email', () => {
    const email = 'nomail.co'

    expect(email).not.toMatch(/\S+@\S+\S+/)
  })

})