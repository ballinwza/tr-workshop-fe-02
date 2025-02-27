import { IPlacardRepository } from '../port/placard.repository.port'

export class DeletePlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(id: string): Promise<boolean> {
        try {
            const result = await this.repo.delete(id)
            return result
        } catch (error) {
            console.error('Error DeletePlacardUsecase : ', error)
            throw error
        }
    }
}
