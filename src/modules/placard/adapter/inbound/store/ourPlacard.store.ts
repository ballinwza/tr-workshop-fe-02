import { IPlacard } from '@/modules/placard/domain/model/placard.model'
import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'

import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import { GetPlacardListByUserIdUsecase } from '@/modules/placard/application/usecase/getPlacardListByUserId.usecase'

interface ourPlacardState {
    ourPlacardList: IPlacard[]
    fetchOurPlacardList: () => Promise<void>
    clearOurPlacard: () => void
}
export const useOurPlacardStore = create<ourPlacardState>((set) => ({
    ourPlacardList: [],
    fetchOurPlacardList: async () => {
        const user = useUserStore.getState().user

        if (user.id) {
            const repo = new PlacardRepository()
            const usecase = new GetPlacardListByUserIdUsecase(repo)

            const placardList = await usecase.handle(user.id)

            set(() => ({
                ourPlacardList: placardList,
            }))
        }
    },
    clearOurPlacard: () => {
        set(() => ({
            ourPlacardList: [],
        }))
    },
}))
