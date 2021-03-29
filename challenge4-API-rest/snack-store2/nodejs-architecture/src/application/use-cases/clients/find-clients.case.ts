import * as clientService from '../../../infrastructure/persistance/prisma/repositories/clients.repository'
import { PrismaClient, CLIENTS } from '.prisma/client'

const prisma = new PrismaClient()
export const findAll = async (): Promise<CLIENTS[]> => {
  const cliente = new clientService.ClientsRespository(prisma)
  return cliente.find()
}
