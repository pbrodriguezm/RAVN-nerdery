import { CLIENTS } from '.prisma/client'

export interface IClientsRepository {
  findAll(): Promise<CLIENTS[]>
}
