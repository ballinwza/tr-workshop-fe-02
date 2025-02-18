'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
    const pathname = useRouter()

    useEffect(() => {
        pathname.push('/blog')
    }, [])
}
