import { PrismaClient, PRODUCTS, REL_CAT_PRODUCTS } from '@prisma/client'
import { findAll } from '../application/use-cases/clients/find-clients.case'
import * as productsService from '../infrastructure/persistance/prisma/repositories/products.repository'

const prisma = new PrismaClient()
it('Products: Is Array FindAll?', async () => {
  const product = new productsService.ProductsRespository(prisma)
  const findProductsResult: PRODUCTS[] = await product.find()
  expect(Array.isArray(findProductsResult)).toEqual(true)
})

it('Add category Product: ERROR Foreign key constraint failed on the field', async () => {
  const product = new productsService.ProductsRespository(prisma)
  const idcategories = 7
  const idproduct = '79ff9440-6960-489b-a997-1ec79345a223'
  const findProductsResult: REL_CAT_PRODUCTS = await product.addCategory(
    idproduct,
    idcategories,
  )
  const error = Object.create(findProductsResult)
  expect(error.code).toEqual('P2003')
})
