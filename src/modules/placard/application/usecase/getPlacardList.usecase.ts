import { isEmpty } from 'radash'
import { PlacardEntityMapper } from '../port/mapper/placard.mapper'
import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class GetPlacardListUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(): Promise<IPlacard[] | null> {
        try {
            const result = await this.repo.getList()
            const mapping = PlacardEntityMapper.toDomainList(result)

            return isEmpty(mapping) ? null : mapping
        } catch (error) {
            console.error('Error GetPlacardListUsecase : ', error)
            throw error
        }
    }
}
