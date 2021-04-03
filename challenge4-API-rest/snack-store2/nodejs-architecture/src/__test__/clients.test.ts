import { PrismaClient } from '@prisma/client'
import { findAll } from '../application/use-cases/clients/find-clients.case'
import * as clientService from '../infrastructure/persistance/prisma/repositories/clients.repository'

const prisma = new PrismaClient()
it('Clients: Is Array FindAll?', async () => {
  const cliente = new clientService.ClientsRespository(prisma)
  const findServiceResult = await cliente.findAll()
  expect(Array.isArray(findServiceResult)).toEqual(true)
})
