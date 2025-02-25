'use client'
import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import { FC, useEffect } from 'react'
import Card from '../components/card/Card'

import BackButton from '../components/button/BackButton'

interface Props {
    placardId: string
}

const BlogDetailProvider: FC<Props> = ({ placardId }: Props) => {
    const { placardDetail: placard, fetchPlacardDetail } = usePlacardStore(
        (state) => state,
    )

    useEffect(() => {
        if (placardId) {
            fetchPlacardDetail(placardId)
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
                    commentCount={0}
                    type="full"
                />
            )}
        </div>
    )
}

export default BlogDetailProvider
