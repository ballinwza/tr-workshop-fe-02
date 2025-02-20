import { IUser } from '@/modules/user/domain/model/user.model'
import { create } from 'zustand'
import { UserRepository } from '../../outbound/repository/user.repository'
import { GetUserUsecase } from '@/modules/user/application/usecase/getUser.usecase'
import { axiosWithRules } from '@/sections/shared/utils/fetchRule.utils'

interface userState {
    user: IUser | null
    fetchUser: () => Promise<void>
    inputUser: string
    setInputUser: (val: string) => void
    login: () => Promise<void>
    logout: () => Promise<void>
}

export const useUserStore = create<userState>((set, get) => ({
    user: null,
    fetchUser: async () => {
        const repo = new UserRepository()
        const usecase = new GetUserUsecase(repo)
        const user = await usecase.handle()

        set(() => ({
            user,
        }))
    },
    inputUser: '',
    setInputUser: (val: string) => {
        set(() => ({
            inputUser: val,
        }))
    },
    login: async () => {
        try {
            const res = await axiosWithRules.post('/auth/login', {
                username: get().inputUser,
            })

            if (res.data.success) {
                window.location.href = '/blogs'
            }
            return
        } catch (error) {
            console.error('Error on useUserStore.login :', error)
            return
        }
    },
    logout: async () => {
        try {
            const res = await axiosWithRules.post('/auth/logout', {})
            if (res.data.success) {
                window.location.href = '/blogs'
            }
            return
        } catch (error) {
            console.error('Error on useUserStore.logout :', error)
            return
        }
    },
}))
