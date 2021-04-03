import { Request, Response } from 'express'
import * as FindClientsCase from '../../application/use-cases/clients/find-clients.case'

export async function findClients(req: Request, res: Response): Promise<void> {
  const result = await FindClientsCase.findAll()
  if (Array.isArray(result)) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}
