import * as productsServices from '../../../infrastructure/persistance/prisma/repositories/products.repository'
import { PrismaClient, PRODUCTS } from '.prisma/client'

const prisma = new PrismaClient()
export const findAll = async (): Promise<PRODUCTS[]> => {
  const cliente = new productsServices.ProductsRespository(prisma)
  return cliente.find()
}
