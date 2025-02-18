'use client'
import { FC } from 'react'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import Image from 'next/image'

const HeaderDesktop: FC = () => {
    const { user } = useUserStore((state) => state)
    const router = useRouter()

    return (
        <div
            className={
                `bg-green-500 text-white 
        flex justify-between items-center px-4 h-[60px] ` + `sm:px-8`
            }
        >
            <div className="italic font-normal text-xl">a Board</div>
            <div>
                {user ? (
                    <div className="flex gap-5 items-center">
                        <div className="font-medium text-white text-base">
                            {user.fullName}
                        </div>
                        <div className="rounded-full overflow-hidden aspect-square w-10">
                            <Image
                                src={user.profileImageUrl}
                                alt="avatar picture"
                                width={40}
                                height={40}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                ) : (
                    <Button onClick={() => router.push('/login')}>
                        Sign In
                    </Button>
                )}
            </div>
        </div>
    )
}

export default HeaderDesktop
