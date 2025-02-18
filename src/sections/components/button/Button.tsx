import { FC } from 'react'

interface Props {
    children: string
    onClick?: () => void
}
const SuccessButton: FC<Props> = ({ children, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className="flex rounded-lg border justify-center items-center 
        bg-success border-success shadow-[0_1px_2px_0_#1018280D text-white 
        min-w-[105px] min-h-10 font-semibold text-sm cursor-pointer"
        >
            {children}
        </div>
    )
}

export default SuccessButton
