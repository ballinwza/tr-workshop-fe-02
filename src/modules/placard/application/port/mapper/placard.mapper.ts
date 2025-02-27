import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { PlacardEntity } from '../../../adapter/outbound/entity/placard.entity'
import { UserEntityMapper } from '@/modules/user/adapter/outbound/mapper/user.mapper'

export class PlacardEntityMapper {
    public static toDomainList(entities: PlacardEntity[]): IPlacard[] {
        return entities.map((entity) => this.toDomain(entity))
    }

    public static toDomain(entity: PlacardEntity): IPlacard {
        return {
            id: entity.id,
            user: UserEntityMapper.toDomain(entity.user),
            title: entity.title,
            description: entity.description,
            community: entity.community,
        }
    }
}
