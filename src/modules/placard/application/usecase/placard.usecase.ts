import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'
import { IPlacardUsecase } from '../../domain/port/placard.usecase.port'

export class PlacardUsecase implements IPlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(placardId: string): Promise<IPlacard> {
        return await this.repo.getByPlacardId(placardId)
    }
}
