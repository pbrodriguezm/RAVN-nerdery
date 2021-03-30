import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import {
  findCars,
  createCars,
} from '../../../interface/controllers/cars.controller'

const router = express.Router()

export function carsRoutes(): Router {
  router.route('/').get(asyncHandler(findCars))
  router.route('/:idcliente').get(asyncHandler(findCars))
  router.route('/add').post(asyncHandler(createCars))
  return router
}
