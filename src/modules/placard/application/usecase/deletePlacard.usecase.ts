import { IPlacardRepository } from '../port/placard.repository.port'

export class DeletePlacardUsecase {
    constructor(private readonly repo: IPlacardRepository) {}

    async handle(id: string): Promise<boolean> {
        return await this.repo.delete(id)
    }
}
