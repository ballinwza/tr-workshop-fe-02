import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'

import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import { GetPlacardListByUserIdUsecase } from '@/modules/placard/application/usecase/getPlacardListByUserId.usecase'
import { message } from 'antd'
import { DeletePlacardUsecase } from '@/modules/placard/application/usecase/deletePlacard.usecase'

interface ourPlacardState {
    ourPlacardList: IPlacard[]
    fetchOurPlacardList: () => Promise<void>
    clearOurPlacard: () => void
    deletePlacard: (id: string) => Promise<void>
}
export const useOurPlacardStore = create<ourPlacardState>((set, get) => ({
    ourPlacardList: [],
    fetchOurPlacardList: async () => {
        const user = useUserStore.getState().user

        if (user.id) {
            const repo = new PlacardRepository()
            const usecase = new GetPlacardListByUserIdUsecase(repo)

            const placardList = await usecase.handle(user.id)

            if (placardList) {
                set(() => ({
                    ourPlacardList: placardList,
                }))
            }
        }
    },
    clearOurPlacard: () => {
        set(() => ({
            ourPlacardList: [],
        }))
    },
    deletePlacard: async (id: string) => {
        const repo = new PlacardRepository()
        const usecase = new DeletePlacardUsecase(repo)
        const result = await usecase.handle(id)
        if (result) {
            message.success('Delete Succesful')
            get().fetchOurPlacardList()
        }
    },
}))
