import { IUser } from '../../domain/model/user.model'

export interface IUserRepository {
    getUser: () => Promise<IUser>
}
