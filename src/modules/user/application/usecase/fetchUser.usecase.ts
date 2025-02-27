import { isEmpty } from 'radash'
import { UserEntityMapper } from '../../adapter/outbound/mapper/user.mapper'
import { IUser } from '../../domain/model/user.model'
import { IUserRepository } from '../port/user.repository.port'

export class FetchUserUsecase {
    constructor(private readonly repo: IUserRepository) {}

    async handle(): Promise<IUser | null> {
        try {
            const result = await this.repo.fetchUser()

            const mapping = UserEntityMapper.toDomain(result)

            return isEmpty(mapping) ? null : mapping
        } catch (error) {
            console.error('Error FetchUserUsecase : ', error)
            throw error
        }
    }
}
