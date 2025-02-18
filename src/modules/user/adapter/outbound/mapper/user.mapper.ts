import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntity } from '../entity/user.entity'

export class UserEntityMapper {
    public static toDomain(entity: UserEntity): IUser {
        const { id, fullName, username, profileImageUrl } = entity
        return {
            id,
            profileImageUrl,
            fullName,
            username,
        }
    }
}
