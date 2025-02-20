'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFoundPage() {
    const pathname = useRouter()

    useEffect(() => {
        pathname.push('/blogs')
    }, [])
}
