import * as userServices from '../../../infrastructure/persistance/prisma/repositories/user.repository'
import { PrismaClient, PRODUCTS, USERS } from '.prisma/client'

const prisma = new PrismaClient({
  errorFormat: 'pretty',
})

export const findAll = async (): Promise<USERS[]> => {
  const userfinaALl = new userServices.UserRespository(prisma)
  return userfinaALl.findAll()
}

export const find = async (id: string): Promise<USERS[]> => {
  const userFind = new userServices.UserRespository(prisma)
  return userFind.find(id)
}

export const createUser = async (params: USERS): Promise<USERS> => {
  const userCreate = new userServices.UserRespository(prisma)
  return userCreate.create(params)
}

export const authUser = async (params: USERS): Promise<USERS> => {
  const userCreate = new userServices.UserRespository(prisma)
  return userCreate.auth(params)
}
