import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class GetPlacardByIdUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(placardId: string): Promise<IPlacard> {
        return await this.repo.getByPlacardId(placardId)
    }
}
