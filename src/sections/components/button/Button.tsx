import { FC } from 'react'

interface Props {
    children: string
}
const SuccessButton: FC<Props> = ({ children }: Props) => {
    return (
        <div
            className="flex rounded-lg border justify-center items-center 
        bg-success border-success shadow-[0_1px_2px_0_#1018280D text-white 
        min-w-[105px] min-h-10 font-semibold text-sm"
        >
            {children}
        </div>
    )
}

export default SuccessButton
