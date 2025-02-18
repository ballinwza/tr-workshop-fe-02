'use client'
import { FC, Fragment, useState } from 'react'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import Image from 'next/image'
import useScreenSize from '@/sections/shared/utils/hooks/useScreenSize.util'
import MobileMenu from './MobileMenu'
import HamburgerButton from '../button/Hamburger'

const HeaderDesktop: FC = () => {
    const { user } = useUserStore((state) => state)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const router = useRouter()
    const { isDesktop } = useScreenSize()

    return (
        <Fragment>
            <div
                className={
                    `bg-green-500 text-white flex justify-between items-center px-4 h-[60px] ` +
                    `md:px-8`
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
                            {!isDesktop && (
                                <HamburgerButton
                                    onClick={() => setIsMobileMenuOpen(true)}
                                />
                            )}
                        </div>
                    ) : (
                        <Fragment>
                            {isDesktop ? (
                                <Button onClick={() => router.push('/login')}>
                                    Sign In
                                </Button>
                            ) : (
                                <HamburgerButton
                                    onClick={() => setIsMobileMenuOpen(true)}
                                />
                            )}
                        </Fragment>
                    )}
                </div>
            </div>
            {!isDesktop && (
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    setIsOpen={setIsMobileMenuOpen}
                />
            )}
        </Fragment>
    )
}

export default HeaderDesktop
