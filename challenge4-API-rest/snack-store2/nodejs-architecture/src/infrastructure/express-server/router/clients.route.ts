import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { findClients } from '../../../interface/controllers/clients.controller'

const router = express.Router()

export function clientsRoutes(): Router {
  router.route('/').get(asyncHandler(findClients))
  router.route('/:id').get(asyncHandler(findClients))

  return router
}
