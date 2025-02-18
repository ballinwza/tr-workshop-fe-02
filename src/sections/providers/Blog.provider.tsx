'use client'

import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import SuccessButton from '@/sections/components/button/Button'
import Card from '@/sections/components/card/Card'
import Dropdown from '@/sections/components/dropdown/Dropdown'
import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { FC, Fragment, useEffect, useState } from 'react'
import CreateModal from '../components/modal/CreateModal'

const BlogProvider: FC = () => {
    const { placards, fetchPlacards, clearPlacards } = usePlacardStore(
        (state) => state,
    )
    const [community, setCommunity] = useState<string>('community')
    const [isModalActive, setIsModalActive] = useState<boolean>(false)

    useEffect(() => {
        fetchPlacards()

        return () => {
            clearPlacards()
        }
    }, [])

    return (
        <Fragment>
            <CreateModal
                title="Create Post"
                isActive={isModalActive}
                setIsActive={setIsModalActive}
            />
            <div
                className={
                    `px-4 py-[47px] ` +
                    `md:max-w-[798px] md:mx-10 md:my-[34px] `
                }
            >
                <div className="flex items-center justify-between mb-6">
                    <div>test</div>
                    <div className="flex items-center gap-[10px]">
                        <div>
                            <Dropdown
                                menuList={getCommunityEnumValues()}
                                dropdownValue={community}
                                setDropdownValue={setCommunity}
                            />
                        </div>
                        <SuccessButton onClick={() => setIsModalActive(true)}>
                            Create +
                        </SuccessButton>
                    </div>
                </div>

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
        </Fragment>
    )
}

export default BlogProvider
