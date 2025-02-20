'use client'
import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import { FC, useEffect } from 'react'
import Card from '../components/card/Card'

import BackButton from '../components/button/BackButton'

interface Props {
    placardId: string
}

const BlogDetailProvider: FC<Props> = ({ placardId }: Props) => {
    const { placard, fetchPlacard } = usePlacardStore((state) => state)

    useEffect(() => {
        if (placardId) {
            fetchPlacard(placardId)
        }
    }, [])

    return (
        <div>
            <div className="bg-white">
                <BackButton />
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
