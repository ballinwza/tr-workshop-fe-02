import { IPlacard } from '../model/placard.model'

export interface ISavePlacardUsecase {
    handle: (formValue: IPlacard) => Promise<boolean>
}
