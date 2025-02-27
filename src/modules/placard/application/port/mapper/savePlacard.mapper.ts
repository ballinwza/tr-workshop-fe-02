import { IPlacardForm } from '@/modules/placard/domain/model/placardForm.model'
import { SavePlacardEntity } from '../../../adapter/outbound/entity/placard.entity'

export class SavePlacardEntityMapper {
    public static toEntity(domain: IPlacardForm): SavePlacardEntity {
        return {
            userId: domain.userId,
            title: domain.title,
            description: domain.description,
            community: domain.community,
        }
    }
}
