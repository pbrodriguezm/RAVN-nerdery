import { PrismaClient, PRODUCTS, REL_CAT_PRODUCTS } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { IProductsRepository } from '../../../../application/contracts/repositories'

export class ProductsRespository implements IProductsRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async find(): Promise<PRODUCTS[]> {
    try {
      return await this.prismaClient.pRODUCTS.findMany({
        skip: 2,
        take: 4,
      })
    } catch (err) {
      return err
    }
  }
  async create(product: PRODUCTS): Promise<PRODUCTS> {
    try {
      product.id = uuidv4()
      product.create = new Date()
      return await this.prismaClient.pRODUCTS.create({
        data: {
          ...product,
        },
      })
    } catch (err) {
      return err
    }
  }

  async addCategory(
    idProduct: string,
    idCategory: number,
  ): Promise<REL_CAT_PRODUCTS> {
    try {
      const valueRel: REL_CAT_PRODUCTS = {
        idcategories: idCategory,
        idproduct: idProduct,
      }
      return await this.prismaClient.rEL_CAT_PRODUCTS.create({
        data: {
          ...valueRel,
        },
      })
    } catch (err) {
      return err
    }
  }

  async delete(id: string): Promise<PRODUCTS> {
    try {
      return await this.prismaClient.pRODUCTS.delete({
        where: { id },
      })
    } catch (err) {
      return err
    }
  }

  async update(id: string, params: Partial<PRODUCTS>): Promise<PRODUCTS> {
    try {
      const product = await this.prismaClient.pRODUCTS.update({
        where: { id },
        data: params,
      })
      return product
    } catch (err) {
      return err
    }
  }
}
