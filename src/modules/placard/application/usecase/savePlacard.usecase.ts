import { IPlacard } from '../../domain/model/placard.model'
import { IPlacardRepository } from '../port/placard.repository.port'

export class SavePlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(formValue: IPlacard): Promise<boolean> {
        //TODO: handle error
        try {
            if (formValue.userId) {
                return await this.repo.save(formValue)
            }

            return false
        } catch (error) {
            throw error
        }
    }
}
