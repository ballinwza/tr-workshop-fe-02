'use client'
import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface Props {
    device: 'desktop' | 'mobile'
    setIsOpen?: (val: boolean) => void
}
const MenuList: FC<Props> = ({ device, setIsOpen = () => false }: Props) => {
    const router = usePathname()

    const menus = [
        {
            label: 'Home',
            href: '/blogs',
            desktoIconImg: '/icons/home-icon.svg',
            mobileIconImage: '/icons/home-light-icon.svg',
        },
        {
            label: 'Our Blog',
            href: '/our-blog',
            desktoIconImg: '/icons/blog-icon.svg',
            mobileIconImage: '/icons/blog-light-icon.svg',
        },
    ]

    const renderMobile = () => {
        return (
            <div className="flex flex-col gap-1 text-green-100 text-base font-extrabold px-4">
                {menus.map((menu) => (
                    <div key={menu.label}>
                        <Link
                            href={menu.href}
                            className="flex items-center gap-3.5 py-2 px-3 w-fit hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <div>
                                <Image
                                    src={menu.mobileIconImage}
                                    alt="home icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div
                                style={{
                                    color:
                                        router === menu.href
                                            ? 'var(--green-100)'
                                            : 'var(--white)',
                                }}
                            >
                                {menu.label}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    const renderDesktop = () => {
        return (
            <div className="flex flex-col gap-1 text-green-500 text-base font-medium px-4 pt-8">
                {menus.map((menu) => (
                    <div key={menu.label}>
                        <Link
                            href={menu.href}
                            className="flex items-center gap-3.5 py-2 px-3 w-fit hover:text-green-300"
                        >
                            <div>
                                <Image
                                    src={menu.desktoIconImg}
                                    alt="home icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div
                                style={{
                                    fontWeight:
                                        router === menu.href ? '800' : '500',
                                }}
                            >
                                {menu.label}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    if (device === 'mobile') {
        return renderMobile()
    } else {
        return renderDesktop()
    }
}

export default MenuList
