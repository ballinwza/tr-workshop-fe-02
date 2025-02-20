'use client'
import { FC } from 'react'
import MenuList from './MenuList'

const Sidebar: FC = () => {
    return (
        <div
            className={
                `bg-grey-100 min-h-screen hidden ` +
                `md:flex md:flex-col md:w-[280px]`
            }
        >
            <MenuList device="desktop" />
        </div>
    )
}

export default Sidebar
