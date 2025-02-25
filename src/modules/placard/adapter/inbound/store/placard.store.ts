import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'
import { GetPlacardByIdUsecase } from '@/modules/placard/application/usecase/getPlacardById.usecase'
import { GetPlacardListUsecase } from '@/modules/placard/application/usecase/getPlacardList.usecase'
import { DeletePlacardUsecase } from '@/modules/placard/application/usecase/deletePlacard.usecase'
import { message } from 'antd'

interface placardState {
    placardList: IPlacard[]
    fetchPlacardList: () => Promise<void>
    clearPlacards: () => void
    placardDetail: IPlacard | null
    fetchPlacardDetail: (userId: string) => Promise<void>
    deletePlacard: (id: string) => Promise<void>
}

export const usePlacardStore = create<placardState>((set) => ({
    placardList: [],
    fetchPlacardList: async () => {
        const repo = new PlacardRepository()
        const usecase = new GetPlacardListUsecase(repo)

        const placardList = await usecase.handle()

        set(() => ({
            placardList,
        }))
    },
    clearPlacards: () => {
        set(() => ({
            placardList: [],
        }))
    },
    placardDetail: null,
    fetchPlacardDetail: async (userId: string) => {
        const repo = new PlacardRepository()
        const usecase = new GetPlacardByIdUsecase(repo)

        const placard = await usecase.handle(userId)

        set(() => ({
            placardDetail: placard,
        }))
    },
    deletePlacard: async (id: string) => {
        const repo = new PlacardRepository()
        const usecase = new DeletePlacardUsecase(repo)

        if (id) {
            await usecase.handle(id)
            message.success('Delete Succesful')
        }
    },
}))
