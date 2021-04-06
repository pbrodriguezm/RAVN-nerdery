import { PrismaClient, USERS } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import createError from 'http-errors'
import { IUserRepository } from '../../../../application/contracts/repositories'

export class UserRespository implements IUserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  create(params: USERS): Promise<USERS> {
    params.idrol = Number(params.idrol)
    params.state = Number(params.state)
    try {
      return this.prismaClient.uSERS.create({
        data: {
          ...params,
        },
      })
    } catch (error) {
      return error
    }
  }

  async find(id: string): Promise<USERS[]> {
    try {
      return await this.prismaClient.uSERS.findMany({
        where: {
          username: id,
        },
      })
    } catch (error) {
      return error
    }
  }

  findAll(): Promise<USERS[]> {
    return this.prismaClient.uSERS.findMany()
  }

  async auth(params: USERS): Promise<USERS> {
    try {
      const userResult: USERS = await this.prismaClient.uSERS
        .findFirst({
          where: {
            username: params.username,
            password: params.password,
          },
        })
        .catch((error) => {
          return error
        })
      return userResult
    } catch (error) {
      return error
    }
  }
}
