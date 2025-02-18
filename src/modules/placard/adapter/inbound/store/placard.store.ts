import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'
import { PlacardsUsecase } from '@/modules/placard/application/usecase/placards.usecase'

interface placardState {
    placards: IPlacard[]
    fetchPlacards: () => Promise<void>
    clearPlacards: () => void
}
export const usePlacardStore = create<placardState>((set) => ({
    placards: [],
    fetchPlacards: async () => {
        const repo = new PlacardRepository()
        const usecase = new PlacardsUsecase(repo)

        const placards = await usecase.handle()

        set(() => ({
            placards,
        }))
    },
    clearPlacards: () => {
        set(() => ({
            placards: [],
        }))
    },
}))
