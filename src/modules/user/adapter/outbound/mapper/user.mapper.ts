import { IUser } from '@/modules/user/domain/model/user.model'
import { UserEntity } from '../entity/user.entity'

export class UserEntityMapper {
    public static toDomain(entity: UserEntity): IUser {
        return {
            id: entity.id,
            profileImageUrl: entity.profileImageUrl,
            fullName: entity.fullName,
            username: entity.username,
        }
    }
}
