import { Request, Response } from 'express'
import * as FindClientsCase from '../../application/use-cases/clients/find-clients.case'

export async function findClients(req: Request, res: Response): Promise<void> {
  const result = await FindClientsCase.findAll()
  res.status(200).send(result)
}
