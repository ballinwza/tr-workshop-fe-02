import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'
import { ISavePlacardUsecase } from '../../domain/port/savePlacard.usecase.port'

export class SavePlacardUsecase implements ISavePlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(formValue: IPlacard): Promise<boolean> {
        return await this.repo.save(formValue)
    }
}
