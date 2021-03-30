import { PRODUCTS } from '.prisma/client'

export interface IProductsRepository {
  find(): Promise<PRODUCTS[]>
}
