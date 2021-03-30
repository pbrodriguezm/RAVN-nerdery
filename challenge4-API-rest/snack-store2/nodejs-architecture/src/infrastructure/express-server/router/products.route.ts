import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import {
  findProducts,
  createProduct,
  deleteProducts,
  updateProducts,
  updateProductsState,
  updateProductsImage,
} from '../../../interface/controllers/products.controller'

const router = express.Router()

export function productsRoutes(): Router {
  router.route('/').get(asyncHandler(findProducts))
  router.route('/:id').get(asyncHandler(findProducts))
  router.route('/add').post(asyncHandler(createProduct))
  router.route('/:id').delete(asyncHandler(deleteProducts))
  router.route('/state/:id/:state').put(asyncHandler(updateProductsState))
  router.route('/image/:id').put(asyncHandler(updateProductsImage))

  return router
}
