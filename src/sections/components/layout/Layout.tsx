import { FC, ReactNode } from 'react'
import HeaderDesktop from './Header'
import Sidebar from './Sidebar'

interface Props {
    children: ReactNode
}
const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <div className="flex flex-col">
            <HeaderDesktop />

            <div className="flex">
                <Sidebar />
                <div className="flex-grow bg-grey-300">{children}</div>
            </div>
        </div>
    )
}

export default Layout
