'user server'
import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntityMapper } from '../mapper/user.mapper'
import Cookies from 'js-cookie'
import axios from 'axios'
import { IUserRepository } from '@/modules/user/application/port/user.repository.port'

export class UserRepository implements IUserRepository {
    async fetchUser(): Promise<IUser> {
        try {
            const cookies = Cookies.get('access_token')

            const response = await axios.get('/user/find', {
                baseURL: `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
                withCredentials: true,
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN_DEV}`,
                    'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
                    Authorization: `Bearer ${cookies}`,
                },
            })

            return UserEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error UserRepository')
            throw error
        }
    }
}
