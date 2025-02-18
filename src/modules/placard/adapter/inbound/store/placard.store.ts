import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'
import { PlacardsUsecase } from '@/modules/placard/application/usecase/placards.usecase'
import { PlacardUsecase } from '@/modules/placard/application/usecase/placard.usecase'

interface placardState {
    placards: IPlacard[]
    fetchPlacards: () => Promise<void>
    clearPlacards: () => void
    placard: IPlacard | null
    fetchPlacard: (userId: string) => Promise<void>
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
    placard: null,
    fetchPlacard: async (userId: string) => {
        const repo = new PlacardRepository()
        const usecase = new PlacardUsecase(repo)

        const placard = await usecase.handle(userId)

        set(() => ({
            placard,
        }))
    },
}))
