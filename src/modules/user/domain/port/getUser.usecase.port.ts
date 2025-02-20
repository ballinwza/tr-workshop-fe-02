import { IUser } from '../model/user.model'

export interface IGetUserUsecase {
    handle: () => Promise<IUser>
}
