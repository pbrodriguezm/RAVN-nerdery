import express, { Router } from 'express'
import { userRoutes } from './users.route'
import { clientsRoutes } from './clients.route'

const router = express.Router()

export function apiRouter(app: Router): Router {
  app.use('/api/v1/users', userRoutes())
  app.use('/api/v1/clients', clientsRoutes())

  return router
}
