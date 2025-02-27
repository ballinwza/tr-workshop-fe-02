'user server'
import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntityMapper } from '../mapper/user.mapper'
import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import { axiosWithAuth } from '@/sections/shared/utils/fetchRule.utils'
import Cookies from 'js-cookie'
import jwt, { JwtPayload } from 'jsonwebtoken'

export class UserRepository implements IUserRepository {
    async fetchUser(): Promise<IUser> {
        try {
            const cookies = Cookies.get('access_token')

            const decoded = jwt.decode(cookies ?? '') as JwtPayload

            const response = await axiosWithAuth.post('/user/find', {
                id: decoded?.id,
            })

            return UserEntityMapper.toDomain(response.data.data)
        } catch (error) {
            console.error('Error UserRepository.fetchUser')
            throw error
        }
    }
}
