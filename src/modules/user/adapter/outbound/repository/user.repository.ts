import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import { axiosWithXApiKey } from '@/sections/shared/utils/fetchRule.utils'
import { UserEntity } from '../entity/user.entity'

export class UserRepository implements IUserRepository {
    async fetchUser(): Promise<UserEntity> {
        try {
            // const cookies = Cookies.get('access_token')

            // const decoded = jwt.decode(cookies ?? '') as JwtPayload

            // const response = await axiosWithAuth.post('/user/find', {
            //     id: decoded?.id,
            // })

            const response = await axiosWithXApiKey.get('/user/find')

            return response.data.data
        } catch (error) {
            console.error('Error UserRepository.fetchUser')
            throw error
        }
    }
}
