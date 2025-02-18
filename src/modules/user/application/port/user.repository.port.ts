import { IUser } from '../../domain/model/user.model'

export interface IUserRepository {
    getByUsername: (username: string) => Promise<IUser>
}
