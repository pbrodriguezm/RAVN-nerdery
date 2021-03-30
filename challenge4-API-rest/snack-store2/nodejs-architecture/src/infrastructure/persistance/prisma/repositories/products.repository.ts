import { PrismaClient, PRODUCTS } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { IProductsRepository } from '../../../../application/contracts/repositories'

export class ProductsRespository implements IProductsRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  find(): Promise<PRODUCTS[]> {
    return this.prismaClient.pRODUCTS.findMany()
  }

  create(product: PRODUCTS): Promise<PRODUCTS> {
    product.id = uuidv4()
    product.create = new Date()
    return this.prismaClient.pRODUCTS.create({
      data: {
        ...product,
      },
    })
  }

  async delete(id: string): Promise<PRODUCTS> {
    // eslint-disable-next-line no-useless-catch
    try {
      const product = await this.prismaClient.pRODUCTS.delete({
        where: { id },
      })
      return product
    } catch (err) {
      //console.log(`Couldn't find User with id = '${id}'`)
      throw err
    }
  }

  async update(id: string, params: Partial<PRODUCTS>): Promise<PRODUCTS> {
    // eslint-disable-next-line no-useless-catch
    try {
      const product = await this.prismaClient.pRODUCTS.update({
        where: { id },
        data: params,
      })

      return product
    } catch (err) {
      throw err
      //console.log(`Couldn't find User with id = '${id}'`)
    }
  }
}
