import { IUser } from '../../domain/model/user.model'
import { IGetUserUsecase } from '../../domain/port/getUser.usecase.port'
import { IUserRepository } from '../port/user.repository.port'

export class GetUserUsecase implements IGetUserUsecase {
    constructor(private readonly repo: IUserRepository) {}

    async handle(): Promise<IUser> {
        return await this.repo.getUser()
    }
}
