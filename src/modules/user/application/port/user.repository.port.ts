import { UserEntity } from '../../adapter/outbound/entity/user.entity'

export interface IUserRepository {
    fetchUser: () => Promise<UserEntity>
}
