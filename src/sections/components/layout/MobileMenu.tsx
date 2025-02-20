'use client'
import Image from 'next/image'
import { FC, Fragment } from 'react'
import BackgroundOverlay from '../modal/BackgroundOverlay'
import MenuList from './MenuList'

interface Props {
    isOpen: boolean
    setIsOpen: (val: boolean) => void
}
const MobileMenu: FC<Props> = ({ isOpen, setIsOpen }: Props) => {
    return (
        <Fragment>
            <div
                className="transition-all absolute bottom-0 top-0 right-0 z-50 bg-green-500 rounded-l-xl overflow-hidden"
                style={{
                    width: isOpen ? '280px' : '0',
                }}
            >
                <div className="px-[33px] py-1.5 mb-9 mt-8 cursor-pointer">
                    <Image
                        onClick={() => setIsOpen(false)}
                        src="/icons/forward-icon.svg"
                        alt="foward icon"
                        width={16}
                        height={12}
                    />
                </div>

                <MenuList device="mobile" setIsOpen={setIsOpen} />
            </div>
            {isOpen && <BackgroundOverlay onClick={() => setIsOpen(false)} />}
        </Fragment>
    )
}

export default MobileMenu
