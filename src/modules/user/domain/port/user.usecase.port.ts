import { IUser } from '../model/user.model'

export interface IUserUsecase {
    handle: (username: string) => Promise<IUser>
}
