import { isEmpty } from 'radash'
import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'
import { PlacardEntityMapper } from '../port/mapper/placard.mapper'

export class GetPlacardByIdUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(placardId: string): Promise<IPlacard | null> {
        try {
            const result = await this.repo.getByPlacardId(placardId)
            const mapping = PlacardEntityMapper.toDomain(result)

            return isEmpty(mapping) ? null : mapping
        } catch (error) {
            console.error('Error GetPlacardByIdUsecase : ', error)
            throw error
        }
    }
}
