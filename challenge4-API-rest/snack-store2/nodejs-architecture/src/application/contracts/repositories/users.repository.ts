import { USERS } from '.prisma/client'

export interface IUserRepository {
  find(id: string): Promise<USERS[]>
  create(params: USERS): Promise<USERS>
  findAll(): Promise<USERS[]>
}
