'use client'

import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import Button from '@/sections/components/button/Button'
import Card from '@/sections/components/card/Card'
import Dropdown from '@/sections/components/dropdown/Dropdown'
import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { FC, Fragment, useEffect, useState } from 'react'
import CreateModal from '../components/modal/CreateModal'
import Image from 'next/image'
import DeleteModal from '../components/modal/DeleteModal'

const OurBlogProvider: FC = () => {
    const { placards, fetchPlacards, clearPlacards } = usePlacardStore(
        (state) => state,
    )
    const [community, setCommunity] = useState<string>('community')
    const [isCreateModalActive, setIsCreateModalActive] =
        useState<boolean>(false)
    const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false)
    const [isDeleteModalActive, setIsDeleteModalActive] =
        useState<boolean>(false)

    useEffect(() => {
        fetchPlacards()

        return () => {
            clearPlacards()
        }
    }, [])

    return (
        <Fragment>
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
                        <Button onClick={() => setIsCreateModalActive(true)}>
                            Create +
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-[1px] overflow-hidden rounded-xl w-full  bg-grey-100">
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
                                extraIcon={
                                    <div className="flex gap-[15px]">
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setIsEditModalActive(true)
                                            }
                                        >
                                            <Image
                                                className={
                                                    `w-3 h-[11px] ` +
                                                    `md:w-4 md:h-4`
                                                }
                                                src="/icons/edit-icon.svg"
                                                alt="edit icon"
                                                width={12}
                                                height={11}
                                            />
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setIsDeleteModalActive(true)
                                            }
                                        >
                                            <Image
                                                className={
                                                    `w-3 h-[13px] ` +
                                                    `md:w-4 md:h-4`
                                                }
                                                src="/icons/trash-icon.svg"
                                                alt="trash icon"
                                                width={12}
                                                height={13}
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        ))}
                </div>
            </div>
            <CreateModal
                title="Create Post"
                isActive={isCreateModalActive}
                setIsActive={setIsCreateModalActive}
            />
            <CreateModal
                title="Edit Post"
                isActive={isEditModalActive}
                setIsActive={setIsEditModalActive}
            />
            <DeleteModal
                isActive={isDeleteModalActive}
                setIsActive={setIsDeleteModalActive}
            />
        </Fragment>
    )
}

export default OurBlogProvider
