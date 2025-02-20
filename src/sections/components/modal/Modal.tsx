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
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 `}
                    style={{
                        width: 'calc(100% - 32px)',
                    }}
                >
                    {children}
                </div>

                <BackgroundOverlay onClick={() => setIsActive(false)} />
            </div>
        )
    }
}

export default Modal
