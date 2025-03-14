import { create } from 'zustand'
import { PlacardRepository } from '../../outbound/repository/placard.repository'
import { SavePlacardUsecase } from '@/modules/placard/application/usecase/savePlacard.usecase'
import { usePlacardStore } from './placard.store'
import { IPlacardForm } from '@/modules/placard/domain/model/placardForm.model'

interface placardFormState {
    saveForm: (formValue: IPlacardForm) => Promise<void>
}

export const usePlacardFormStore = create<placardFormState>(() => ({
    saveForm: async (formValue: IPlacardForm) => {
        try {
            const repo = new PlacardRepository()
            const usecase = new SavePlacardUsecase(repo)

            const placards = await usecase.handle(formValue)
            if (placards) {
                usePlacardStore.getState().fetchPlacardList()
            }

            return
        } catch (error) {
            console.error('Error usePlacardFormStore.saveForm ', error)
            return
        }
    },
}))
