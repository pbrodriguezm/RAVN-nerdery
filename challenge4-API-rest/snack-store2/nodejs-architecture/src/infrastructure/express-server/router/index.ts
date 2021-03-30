import express, { Router } from 'express'
import { userRoutes } from './users.route'
import { clientsRoutes } from './clients.route'
import { productsRoutes } from './products.route'
import { carsRoutes } from './cars.route'

const router = express.Router()

export function apiRouter(app: Router): Router {
  app.use('/api/v1/users', userRoutes())
  app.use('/api/v1/clients', clientsRoutes())
  app.use('/api/v1/products', productsRoutes())
  app.use('/api/v1/buy', productsRoutes())
  app.use('/api/v1/car', carsRoutes())
  app.use('/api/v1/car/:idcliente', carsRoutes())

  return router
}
