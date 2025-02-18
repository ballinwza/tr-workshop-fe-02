import { IUser } from '../../domain/model/user.model'
import { IUserUsecase } from '../../domain/port/user.usecase.port'
import { IUserRepository } from '../port/user.repository.port'

export class UserUsecase implements IUserUsecase {
    constructor(private readonly repo: IUserRepository) {}

    async handle(username: string): Promise<IUser> {
        return await this.repo.getByUsername(username)
    }
}
