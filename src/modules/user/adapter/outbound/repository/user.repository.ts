'user server'
import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntityMapper } from '../mapper/user.mapper'
import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import { axiosWithAuth } from '@/sections/shared/utils/fetchRule.utils'

export class UserRepository implements IUserRepository {
    async fetchUser(): Promise<IUser> {
        try {
            const response = await axiosWithAuth.get('/user/find')

            return UserEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error UserRepository.fetchUser')
            throw error
        }
    }
}
