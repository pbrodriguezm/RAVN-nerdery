import * as productsServices from '../../../infrastructure/persistance/prisma/repositories/products.repository'
import { PrismaClient, PRODUCTS } from '.prisma/client'

const prisma = new PrismaClient()
export const createProducts = async (params: PRODUCTS): Promise<PRODUCTS> => {
  const product = new productsServices.ProductsRespository(prisma)
  return product.create(params)
}
