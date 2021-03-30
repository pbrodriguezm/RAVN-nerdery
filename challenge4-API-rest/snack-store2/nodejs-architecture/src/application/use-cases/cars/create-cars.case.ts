import * as carsServices from '../../../infrastructure/persistance/prisma/repositories/cars.repository'
import { PrismaClient, CAR } from '.prisma/client'

const prisma = new PrismaClient()

export const createCar = async (params: CAR): Promise<CAR> => {
  const car = new carsServices.CarsRespository(prisma)
  return car.create(params)
}
