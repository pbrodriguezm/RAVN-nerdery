import { PRODUCTS, REL_CAT_PRODUCTS } from '.prisma/client'

export interface IProductsRepository {
  find(): Promise<PRODUCTS[]>
  addCategory(idProduct: string, idCategory: number): Promise<REL_CAT_PRODUCTS>
}
