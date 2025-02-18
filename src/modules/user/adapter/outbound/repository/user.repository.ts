import { IUserRepository } from '@/modules/user/application/port/user.repository.port'
import { IUser } from '@/modules/user/domain/model/user.model'
import axios from 'axios'
import { UserEntityMapper } from '../mapper/user.mapper'

export class UserRepository implements IUserRepository {
    async getByUsername(username: string): Promise<IUser> {
        try {
            const response = await axios.post(
                'http://localhost:8000/user/find',
                {
                    username,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )

            console.log('response', response.data)
            return UserEntityMapper.toDomain(response.data)
        } catch (error) {
            console.error('Error UserRepository')
            throw error
        }
    }
}
