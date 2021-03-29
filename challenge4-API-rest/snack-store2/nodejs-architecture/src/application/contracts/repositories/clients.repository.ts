import { CLIENTS } from '.prisma/client'

export interface IClientsRepository {
  find(): Promise<CLIENTS[]>
}
