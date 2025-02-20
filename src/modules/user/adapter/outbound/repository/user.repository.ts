import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntityMapper } from '../mapper/user.mapper'
import { axiosWithRules } from '@/sections/shared/utils/fetchRule.utils'

export class UserRepository implements IUserRepository {
    async getUser(): Promise<IUser> {
        try {
            const response = await axiosWithRules.get('user/find')
            return UserEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error UserRepository')
            throw error
        }
    }
}
