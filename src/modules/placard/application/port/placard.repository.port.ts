import { IPlacard } from '../../domain/model/placard.model'

export interface IPlacardRepository {
    getAll: () => Promise<IPlacard[]>
}
