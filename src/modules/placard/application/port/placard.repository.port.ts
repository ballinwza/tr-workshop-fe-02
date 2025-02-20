import { IPlacard } from '../../domain/model/placard.model'

export interface IPlacardRepository {
    getAll: () => Promise<IPlacard[]>
    getByPlacardId: (placardId: string) => Promise<IPlacard | null>
    save: (formValue: IPlacard) => Promise<boolean>
}
