import { ProductsDto } from '../../use-cases/products/dtos'

export interface IProductsRepository {
  find(): Promise<ProductsDto[]>
}
