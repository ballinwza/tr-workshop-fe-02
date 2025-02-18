import { FC, ReactNode } from 'react'

import BackgroundOverlay from './BackgroundOverlay'

interface Props {
    children: ReactNode
    isActive: boolean
    setIsActive: (val: boolean) => void
}

const Modal: FC<Props> = ({ children, isActive, setIsActive }: Props) => {
    if (isActive) {
        return (
            <div>
                <div className="mx-10 bg-red-500">{children}</div>
                <BackgroundOverlay onClick={() => setIsActive(false)} />
            </div>
        )
    }
}

export default Modal
