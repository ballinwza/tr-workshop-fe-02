import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const Tag: FC<Props> = ({ children }: Props) => {
    return (
        <div className="flex justify-center items-center rounded-2xl py-1 px-2 bg-[#F3F3F3] w-fit">
            <span className="text-xs font-normal text-[#4A4A4A]">
                {children}
            </span>
        </div>
    )
}

export default Tag
