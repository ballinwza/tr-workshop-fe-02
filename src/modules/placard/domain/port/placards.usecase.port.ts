import { IPlacard } from '../model/placard.model'

export interface IPlacardsUsecase {
    handle: () => Promise<IPlacard[]>
}
