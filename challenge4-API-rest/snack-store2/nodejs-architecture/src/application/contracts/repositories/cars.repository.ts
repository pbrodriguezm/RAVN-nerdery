import { CAR } from '.prisma/client'

export interface ICarsRepository {
  find(): Promise<CAR[]>
}
