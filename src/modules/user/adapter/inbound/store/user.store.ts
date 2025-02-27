import { IUser } from '@/modules/user/domain/model/user.model'
import { create } from 'zustand'
import { UserRepository } from '../../outbound/repository/user.repository'

import { axiosWithXApiKey } from '@/sections/shared/utils/fetchRule.utils'
import { FetchUserUsecase } from '@/modules/user/application/usecase/fetchUser.usecase'
import { message } from 'antd'

interface userState {
    user: IUser | null
    fetchUser: () => Promise<void>
    inputUser: string
    setInputUser: (val: string) => void
    login: () => Promise<void>
    logout: () => Promise<void>
}
// export const defaultUser: IUser = {
//     id: '',
//     profileImageUrl: '',
//     fullName: '',
//     username: '',
// }

export const useUserStore = create<userState>((set, get) => ({
    user: null,
    fetchUser: async () => {
        const repo = new UserRepository()
        const usecase = new FetchUserUsecase(repo)

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
            const res = await axiosWithXApiKey.post('/auth/login', {
                username: get().inputUser,
                password: 'nothing',
            })

            if (res.data.success) {
                window.location.href = '/blogs'
            }
            return
        } catch (error) {
            message.error('Invalid username')
            console.error('Error on useUserStore.login :', error)
            return
        }
    },
    logout: async () => {
        try {
            const res = await axiosWithXApiKey.post('/auth/logout', {})
            localStorage.removeItem('user_info')
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
