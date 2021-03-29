import { Exclude, Expose, Transform } from 'class-transformer'
//import { CLIENTS } from '.prisma/client'
import { ClientsDto } from '../../application/use-cases/clients/dtos'

@Exclude()
export class ClientsSerializer implements Omit<ClientsDto, 'password'> {
  @Expose()
  readonly id: number

  @Expose()
  readonly idproduct: string

  @Expose()
  readonly idclient: string

  @Expose()
  @Transform(({ value }) => value?.toISOString())
  readonly register: Date
}
