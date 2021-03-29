import { LikesDto } from '../../use-cases/likes/dtos'

export interface ILikesRepository {
  find(): Promise<LikesDto[]>
}
