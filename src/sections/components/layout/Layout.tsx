import { FC, ReactNode } from 'react'
import HeaderDesktop from './Header'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
    childClassName?: string
}
const Layout: FC<Props> = ({ children, childClassName }: Props) => {
    return (
        <div className="flex flex-col">
            <HeaderDesktop />

            <div className="flex">
                <Sidebar />
                <div className={`flex-grow min-h-screen ${childClassName}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
