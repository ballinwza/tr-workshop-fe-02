import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { PlacardEntity } from '../entity/placard.entity'
import { UserEntityMapper } from '@/modules/user/adapter/outbound/mapper/user.mapper'

export class PlacardEntityMapper {
    public static toDomainList(entities: PlacardEntity[]): IPlacard[] {
        return entities.map((entity) => this.toDomain(entity))
    }

    public static toDomain(entity: PlacardEntity): IPlacard {
        const { id, userId, title, description, commentId, community } = entity
        return {
            id,
            userId: UserEntityMapper.toDomain(userId),
            title,
            description,
            commentId,
            community,
        }
    }
}
