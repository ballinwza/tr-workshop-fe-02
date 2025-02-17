import { FC } from 'react'

const Sidebar: FC = () => {
    return (
        <div
            className={
                `bg-grey-100 min-h-screen hidden ` +
                `md:flex md:flex-col md:w-[280px]`
            }
        >
            <div>Home</div>
            <div>Our Blog</div>
        </div>
    )
}

export default Sidebar
