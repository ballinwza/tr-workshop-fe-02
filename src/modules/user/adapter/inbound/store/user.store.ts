import { IUser } from '@/modules/user/domain/model/user.model'
import { create } from 'zustand'
import { UserRepository } from '../../outbound/repository/user.repository'
import { UserUsecase } from '@/modules/user/application/usecase/user.usecase'
// import Router from 'next/router'
// import Cookies from 'js-cookie'

interface userState {
    user: IUser | null
    fetchUser: () => Promise<void>
    inputUser: string
    setInputUser: (val: string) => void
}

export const useUserStore = create<userState>((set, get) => ({
    user: null,
    fetchUser: async () => {
        const repo = new UserRepository()
        const usecase = new UserUsecase(repo)
        const user = await usecase.handle(get().inputUser)
        set(() => ({
            user,
        }))

        // Cookies.set(getAuthCookiesName(), JSON.stringify(tokens), {
        //     expires: 7,
        //     secure: true,
        //     sameSite: 'strict',
        //     domain: window?.location?.hostname ?? null,
        // })
        if (user !== null) {
            console.log(user)
            // window.location.href = '/blogs'
        }
    },
    inputUser: '',
    setInputUser: (val: string) => {
        set(() => ({
            inputUser: val,
        }))
    },
}))
