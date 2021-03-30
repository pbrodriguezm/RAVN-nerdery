import * as productsServices from '../../../infrastructure/persistance/prisma/repositories/products.repository'
import { PrismaClient, PRODUCTS } from '.prisma/client'

const prisma = new PrismaClient()
export const updateProducts = async (
  id: string,
  params: PRODUCTS,
): Promise<PRODUCTS> => {
  const product = new productsServices.ProductsRespository(prisma)
  return product.update(id, params)
}
