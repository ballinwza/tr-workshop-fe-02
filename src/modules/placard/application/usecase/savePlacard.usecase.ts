import { IPlacardForm } from '../../domain/model/placardForm.model'
import { SavePlacardEntityMapper } from '../port/mapper/savePlacard.mapper'
import { IPlacardRepository } from '../port/placard.repository.port'

export class SavePlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(formValue: IPlacardForm): Promise<boolean> {
        try {
            const mapping = SavePlacardEntityMapper.toEntity(formValue)
            const result = await this.repo.save(mapping)
            return result
        } catch (error) {
            console.error('Error SavePlacardUsecase : ', error)
            throw error
        }
    }
}
