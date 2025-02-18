'use client'
import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import Card from '@/sections/components/card/Card'
import { useEffect } from 'react'

export default function HomePage() {
    const { placards, fetchPlacards, clearPlacards } = usePlacardStore(
        (state) => state,
    )

    useEffect(() => {
        fetchPlacards()

        return () => {
            clearPlacards()
        }
    }, [])

    return (
        <div
            className={
                `px-4 py-[47px] ` + `md:max-w-[798px] md:mx-10 md:my-[34px] `
            }
        >
            <div className="flex flex-col gap-[0.5px] overflow-hidden rounded-xl w-full  bg-grey-100">
                {placards &&
                    placards.map((placard) => (
                        <Card
                            key={placard.id}
                            name={placard.userId.fullName}
                            title={placard.title}
                            avatarImageUrl={placard.userId.profileImageUrl}
                            tag={placard.community}
                            description={placard.description}
                            commentCount={placard.commentId.length}
                        />
                    ))}
            </div>
        </div>
    )
}
