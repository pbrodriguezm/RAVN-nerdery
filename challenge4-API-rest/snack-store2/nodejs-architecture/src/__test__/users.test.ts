import { PrismaClient, USERS } from '@prisma/client'
import { findAll } from '../application/use-cases/clients/find-clients.case'
import * as userService from '../infrastructure/persistance/prisma/repositories/user.repository'

const prisma = new PrismaClient()

it('SingUp: error username unique,  ', async () => {
  const users = new userService.UserRespository(prisma)
  const testUser: USERS = {
    username: 'admin',
    password: 'PASTEST',
    name: 'NSETEST',
    create: new Date(),
    state: 1,
    idrol: 2,
  }
  const createResult: USERS = await users
    .create(testUser)
    .catch((error) => error)
  const error = Object.create(createResult)
  expect(error.code).toEqual('P2002')
})

test('Find User status 200: success find user,  ', async () => {
  const username = 'admin'
  const users = new userService.UserRespository(prisma)
  const findResult: USERS[] = await users.find(username).catch((error) => error)
  expect(findResult.length > 0).toEqual(true)
  expect(findResult[0].username).toEqual(username)
})

test('Find User status 204: error find user,  ', async () => {
  const username = 'usererror'
  const users = new userService.UserRespository(prisma)
  const findResult: USERS[] = await users.find(username).catch((error) => error)
  expect(findResult.length).toEqual(0)
})
