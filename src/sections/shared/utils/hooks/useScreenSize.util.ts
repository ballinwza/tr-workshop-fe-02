import { useState, useEffect } from 'react'

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    })

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const updateSize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    return isClient
        ? { isDesktop: screenSize.width > 768 }
        : { width: 0, height: 0 }
}

export default useScreenSize
