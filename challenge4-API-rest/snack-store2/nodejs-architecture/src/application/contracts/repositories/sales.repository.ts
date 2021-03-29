import { SalesDto } from '../../use-cases/sales/dtos'

export interface ISalesRepository {
  find(): Promise<SalesDto[]>
}
