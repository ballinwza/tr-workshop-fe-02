import { IPlacard } from '../model/placard.model'

export interface IPlacardUsecase {
    handle: (placardId: string) => Promise<IPlacard>
}
