import { FC, ReactNode } from 'react'
import HeaderDesktop from './Header'

interface Props {
    children: ReactNode
}
const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <div className="flex flex-col">
            <div>
                <HeaderDesktop />
            </div>
            <div className="flex">
                <div>Sidebar</div>
                <div className="bg-green-500">{children}</div>
            </div>
        </div>
    )
}

export default Layout
