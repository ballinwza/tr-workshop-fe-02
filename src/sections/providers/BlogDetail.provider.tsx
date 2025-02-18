'use client'
import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import { FC, useEffect } from 'react'
import Card from '../components/card/Card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
    placardId: string
}

const BlogDetailProvider: FC<Props> = ({ placardId }: Props) => {
    const { placard, fetchPlacard } = usePlacardStore((state) => state)
    const router = useRouter()

    useEffect(() => {
        if (placardId) {
            fetchPlacard(placardId)
            console.log('userId : ', placardId)
        }
    }, [])

    return (
        <div>
            <div className="bg-white">
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
            </div>
            {placard && (
                <Card
                    key={placard.id}
                    name={placard.userId.fullName}
                    title={placard.title}
                    avatarImageUrl={placard.userId.profileImageUrl}
                    tag={placard.community}
                    description={placard.description}
                    commentCount={placard.commentId.length}
                    type="full"
                />
            )}
        </div>
    )
}

export default BlogDetailProvider
