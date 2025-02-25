import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class GetPlacardListByUserIdUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(userId: string): Promise<IPlacard[]> {
        return await this.repo.getListByUserId(userId)
    }
}
