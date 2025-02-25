import { IUser } from '../../domain/model/user.model'

export interface IUserRepository {
    fetchUser: () => Promise<IUser>
}
