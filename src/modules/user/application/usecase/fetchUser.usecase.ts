import { defaultUser } from '../../adapter/inbound/store/user.store'
import { IUser } from '../../domain/model/user.model'
import { IUserRepository } from '../port/user.repository.port'
import Cookies from 'js-cookie'
export class FetchUserUsecase {
    constructor(private readonly repo: IUserRepository) {}

    async handle(): Promise<IUser> {
        const cookies = Cookies.get('access_token')

        if (cookies) {
            return await this.repo.fetchUser()
        }

        return defaultUser
    }
}
