import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class GetPlacardListUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(): Promise<IPlacard[]> {
        return await this.repo.getList()
    }
}
