'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.back()}
            className="flex justify-center items-center aspect-square w-[44px] bg-green-100 rounded-full overflow-hidden cursor-pointer"
        >
            <Image
                src="/icons/back-icon.svg"
                alt="back icon"
                width={14}
                height={14}
            />
        </div>
    )
}

export default BackButton
