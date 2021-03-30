import * as carsServices from '../../../infrastructure/persistance/prisma/repositories/cars.repository'
import { PrismaClient, CAR } from '.prisma/client'

const prisma = new PrismaClient()
export const findAll = async (): Promise<CAR[]> => {
  const cliente = new carsServices.CarsRespository(prisma)
  return cliente.find()
}

export const findIdClient = async (idclient: string): Promise<CAR[]> => {
  const cliente = new carsServices.CarsRespository(prisma)
  return cliente.findbyIdClient(idclient)
}
