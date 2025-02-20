import { IUser } from '../../domain/model/user.model'

export interface IUserRepository {
    getByUsername: () => Promise<IUser>
}
