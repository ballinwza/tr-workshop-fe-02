import { FC } from 'react'
import SuccessButton from '../button/Button'

const HeaderDesktop: FC = () => {
    return (
        <div
            className={
                `bg-green-500 text-white 
        flex justify-between items-center px-4 h-[60px] ` + `sm:px-8`
            }
        >
            <div className="italic font-normal text-xl">a Board</div>
            <div>
                <SuccessButton>Sign In</SuccessButton>
            </div>
        </div>
    )
}

export default HeaderDesktop
