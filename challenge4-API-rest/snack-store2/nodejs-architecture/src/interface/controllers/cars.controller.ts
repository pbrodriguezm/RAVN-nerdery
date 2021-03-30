import { Request, Response } from 'express'
import * as FindCarsCase from '../../application/use-cases/cars/find-cars.case'
import * as CreateCarsCase from '../../application/use-cases/cars/create-cars.case'
import { CAR } from '.prisma/client'

export async function findCars(req: Request, res: Response): Promise<void> {
  const idclient = req.params.idcliente
  if (idclient) {
    res.status(200).send(await FindCarsCase.findIdClient(idclient))
  } else {
    res.status(200).send(await FindCarsCase.findAll())
  }
}

export async function createCars(req: Request, res: Response): Promise<void> {
  const dto: CAR = req.body
  const result = await CreateCarsCase.createCar(dto)
  res.status(200).send(result)
}
