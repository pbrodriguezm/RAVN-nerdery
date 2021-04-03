import { Request, Response } from 'express'
import * as FindProductsCase from '../../application/use-cases/products/find-products.case'
import * as CreateProductsCase from '../../application/use-cases/products/create-products.case'
import * as DeleteProductsCase from '../../application/use-cases/products/delete-products.case'
import * as UpdateProductsCase from '../../application/use-cases/products/update-products.case'
import { PRODUCTS } from '.prisma/client'

export async function findProducts(req: Request, res: Response): Promise<void> {
  const result = await FindProductsCase.findAll()
  res.status(200).send(result)
}

export async function createProduct(
  req: Request,
  res: Response,
): Promise<void> {
  const dto: PRODUCTS = req.body
  const result = await CreateProductsCase.createProducts(dto)
  res.status(200).send(result)
}

export async function deleteProducts(
  req: Request,
  res: Response,
): Promise<void> {
  const id: string = req.params.id
  const result = await DeleteProductsCase.deleteProducts(id)
  if (result.id) {
    res.status(200).send(result)
  } else {
    if (Object.prototype.hasOwnProperty.call(result, 'code')) {
      res.status(403).send(result)
    } else {
      res.status(404).send('{ error, colums detect error}')
    }
  }
}

export async function updateProducts(
  req: Request,
  res: Response,
): Promise<void> {
  const id: string = req.params.id
  const dto: PRODUCTS = req.body
  const result = await UpdateProductsCase.updateProducts(id, dto)
  res.status(200).send(result)
}

export async function updateProductsState(
  req: Request,
  res: Response,
): Promise<void> {
  const id: string = req.params.id
  const state: string = req.params.state
  const dto: PRODUCTS = JSON.parse('{ "state": ' + state + ' }')
  const result = await UpdateProductsCase.updateProducts(id, dto)
  res.status(200).send(result)
}

export async function updateProductsImage(
  req: Request,
  res: Response,
): Promise<void> {
  const id: string = req.params.id
  const dto: PRODUCTS = JSON.parse('{ "image": "' + req.body.image + '" }')
  const result = await UpdateProductsCase.updateProducts(id, dto)
  res.status(200).send(result)
}
