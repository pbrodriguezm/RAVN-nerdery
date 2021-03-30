import * as productsServices from '../../../infrastructure/persistance/prisma/repositories/products.repository'
import { PrismaClient, PRODUCTS } from '.prisma/client'

const prisma = new PrismaClient()
export const deleteProducts = async (id: string): Promise<PRODUCTS> => {
  const product = new productsServices.ProductsRespository(prisma)
  return product.delete(id)
}
