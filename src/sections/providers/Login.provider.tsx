'use client'
import { Input } from '@headlessui/react'
import { FC, useEffect } from 'react'
import Button from '../components/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import { useRouter } from 'next/navigation'

const LoginProvider: FC = () => {
    const { login, setInputUser, user } = useUserStore((state) => state)
    const router = useRouter()
    useEffect(() => {
        if (user.id) {
            router.replace('/blogs')
        }
    }, [user])
    return (
        <div
            className={
                `bg-green-500 min-h-screen flex flex-col ` + `md:flex-row`
            }
        >
            <div
                className={
                    `flex flex-col gap-[27px] justify-center items-center bg-green-300 rounded-b-[36px] h-[362px] ` +
                    `md:order-2 md:w-1/2 md:h-screen md:rounded-l-[36px] md:gap-[42px]`
                }
            >
                <div>
                    <Link href="/blogs">
                        <Image
                            src="/login/login-logo.png"
                            alt="login logo"
                            className="md:w-[299px] md:h-[230px]"
                            width={171}
                            height={131}
                        />
                    </Link>
                </div>
                <div className="text-white italic text-2xl font-normal">
                    a Board
                </div>
            </div>

            <div
                className={
                    `flex justify-center items-center w-full h-[50vh] flex-grow ` +
                    `md:order-1 md:w-1/2 md:h-screen`
                }
            >
                <div
                    className={
                        `flex flex-col gap-10 px-4 w-full ` +
                        `md:w-[384px] md:p-0`
                    }
                >
                    <div className="text-white text-[28px] leading-[33px] font-semibold">
                        Sign in
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <Input
                                name="full_name"
                                type="text"
                                placeholder="Username"
                                onChange={(e) =>
                                    setInputUser(e.currentTarget.value)
                                }
                                className="w-full px-3.5 py-1.5 text-[#A0AFBA] rounded-md"
                            />
                        </div>
                        <div>
                            <Button onClick={login}>Sign In</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginProvider
