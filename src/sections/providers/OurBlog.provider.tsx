'use client'

import Card from '@/sections/components/card/Card'
import Dropdown from '@/sections/components/dropdown/Dropdown'
import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { FC, Fragment, useEffect, useState } from 'react'

import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import { useOurPlacardStore } from '@/modules/placard/adapter/inbound/store/ourPlacard.store'
import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import Button from '../components/button/Button'

const OurBlogProvider: FC = () => {
    const { ourPlacardList, fetchOurPlacardList, clearOurPlacard } =
        useOurPlacardStore((state) => state)
    const { deletePlacard } = usePlacardStore((state) => state)
    const { user } = useUserStore((state) => state)

    const [community, setCommunity] = useState<string>('community')
    // const [isCreateModalActive, setIsCreateModalActive] =
    //     useState<boolean>(false)
    // const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false)
    // const [isDeleteModalActive, setIsDeleteModalActive] =
    //     useState<boolean>(false)

    useEffect(() => {
        fetchOurPlacardList()

        return () => {
            clearOurPlacard()
        }
    }, [user])

    return (
        <Fragment>
            <div
                className={
                    `px-4 py-[47px] ` +
                    `md:max-w-[798px] md:mx-10 md:my-[34px] `
                }
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-between gap-[10px] w-full">
                        <div className="text-start">
                            <Dropdown
                                menuList={getCommunityEnumValues()}
                                dropdownValue={community}
                                setDropdownValue={setCommunity}
                            />
                        </div>
                        {/* <Button onClick={() => setIsCreateModalActive(true)}> */}
                        <Button>Create +</Button>
                    </div>
                </div>

                <div className="flex flex-col gap-[1px] overflow-hidden rounded-xl w-full  bg-grey-100">
                    {ourPlacardList &&
                        ourPlacardList.map((placard) => (
                            <Card
                                key={placard.id}
                                name={placard.userId.fullName}
                                title={placard.title}
                                avatarImageUrl={placard.userId.profileImageUrl}
                                tag={placard.community}
                                description={placard.description}
                                commentCount={0}
                                extraIcon={true}
                                onDelete={() => deletePlacard(placard.id)}
                                // extraIcon={
                                //     <div className="flex gap-[15px]">
                                //         <div
                                //             className="cursor-pointer"
                                //             onClick={() =>
                                //                 setIsEditModalActive(true)
                                //             }
                                //         >
                                //             <Image
                                //                 className={
                                //                     `w-3 h-[11px] ` +
                                //                     `md:w-4 md:h-4`
                                //                 }
                                //                 src="/icons/edit-icon.svg"
                                //                 alt="edit icon"
                                //                 width={12}
                                //                 height={11}
                                //             />
                                //         </div>
                                //         <div
                                //             className="cursor-pointer"
                                //             onClick={() =>
                                //                 setIsDeleteModalActive(true)
                                //             }
                                //         >
                                //             <Image
                                //                 className={
                                //                     `w-3 h-[13px] ` +
                                //                     `md:w-4 md:h-4`
                                //                 }
                                //                 src="/icons/trash-icon.svg"
                                //                 alt="trash icon"
                                //                 width={12}
                                //                 height={13}
                                //             />
                                //         </div>
                                //     </div>
                                // }
                            />
                        ))}
                </div>
            </div>
            {/* <CreateModal
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
            /> */}
        </Fragment>
    )
}

export default OurBlogProvider
