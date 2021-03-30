import { CAR, PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { ICarsRepository } from '../../../../application/contracts/repositories'

export class CarsRespository implements ICarsRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  find(): Promise<CAR[]> {
    return this.prismaClient.cAR.findMany()
  }

  findbyIdClient(idclient: string): Promise<CAR[]> {
    return this.prismaClient.cAR.findMany({
      where: {
        idclient: idclient,
      },
    })
  }

  create(car: CAR): Promise<CAR> {
    car.id = uuidv4()
    return this.prismaClient.cAR.create({
      data: {
        ...car,
      },
    })
  }
}
