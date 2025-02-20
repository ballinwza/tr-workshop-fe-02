import { IPlacardsUsecase } from '../../domain/port/placards.usecase.port'
import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class PlacardsUsecase implements IPlacardsUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(): Promise<IPlacard[]> {
        return await this.repo.getAll()
    }
}
