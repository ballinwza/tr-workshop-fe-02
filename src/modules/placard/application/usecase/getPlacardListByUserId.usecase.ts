import { isEmpty } from 'radash'
import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'
import { PlacardEntityMapper } from '../port/mapper/placard.mapper'

export class GetPlacardListByUserIdUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(userId: string): Promise<IPlacard[] | null> {
        try {
            const result = await this.repo.getListByUserId(userId)
            const mapping = PlacardEntityMapper.toDomainList(result)

            return isEmpty(mapping) ? null : mapping
        } catch (error) {
            console.error('Error GetPlacardListByUserIdUsecase : ', error)
            throw error
        }
    }
}
