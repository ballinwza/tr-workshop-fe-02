import { IPlacard } from '@/modules/placard/domain/model/placard.model'

import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'
import { SavePlacardUsecase } from '@/modules/placard/application/usecase/savePlacard.usecase'
import { usePlacardStore } from './placard.store'

interface placardFormState {
    saveForm: (formValue: IPlacard) => Promise<void>
}

export const usePlacardFormStore = create<placardFormState>(() => ({
    saveForm: async (formValue: IPlacard) => {
        const repo = new PlacardRepository()
        const usecase = new SavePlacardUsecase(repo)

        const placards = await usecase.handle(formValue)
        if (placards) {
            usePlacardStore.getState().fetchPlacards()
        }

        return
    },
}))
