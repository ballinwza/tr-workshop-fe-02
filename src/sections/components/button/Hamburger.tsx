import { FC } from 'react'

import Image from 'next/image'

interface Props {
    onClick: () => void
}
const HamburgerButton: FC<Props> = ({ onClick }: Props) => {
    return (
        <Image
            className="cursor-pointer"
            onClick={onClick}
            src="/icons/hamburger-icon.svg"
            alt="hamburger icon"
            width={24}
            height={24}
        />
    )
}

export default HamburgerButton
