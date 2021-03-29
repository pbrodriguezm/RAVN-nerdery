import { CLIENTS, PrismaClient } from '@prisma/client'
import { IClientsRepository } from '../../../../application/contracts/repositories'

export class ClientsRespository implements IClientsRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  find(): Promise<CLIENTS[]> {
    return this.prismaClient.cLIENTS.findMany()
  }
}
