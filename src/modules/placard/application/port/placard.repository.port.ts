import { SavePlacardEntity } from '../../adapter/outbound/entity/placard.entity'
import { IPlacard } from '../../domain/model/placard.model'

export interface IPlacardRepository {
    getList: () => Promise<IPlacard[]>
    getListByUserId: (userId: string) => Promise<IPlacard[]>
    getByPlacardId: (placardId: string) => Promise<IPlacard>
    save: (formValue: SavePlacardEntity) => Promise<boolean>
    update: (formValue: SavePlacardEntity) => Promise<boolean>
    delete: (id: string) => Promise<boolean>
}
