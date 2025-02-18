'use client'
import { FC, useEffect } from 'react'

interface Props {
    onClick?: () => void
}
const BackgroundOverlay: FC<Props> = ({ onClick }: Props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div
            onClick={onClick}
            className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-30 overflow-hidden"
        />
    )
}

export default BackgroundOverlay
