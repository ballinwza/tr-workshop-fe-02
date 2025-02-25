'use client'

import { usePlacardStore } from '@/modules/placard/adapter/inbound/store/placard.store'
import Button from '@/sections/components/button/Button'
import Card from '@/sections/components/card/Card'
import Dropdown from '@/sections/components/dropdown/Dropdown'
import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { FC, Fragment, useEffect, useState } from 'react'
import CreateModal from '../components/modal/CreateModal'
import InputSearch from '../components/search/InputSearch'
import { useUserStore } from '@/modules/user/adapter/inbound/store/user.store'
import { useRouter } from 'next/navigation'

const BlogsProvider: FC = () => {
    const { user } = useUserStore((state) => state)
    const { placardList, fetchPlacardList, clearPlacards } = usePlacardStore(
        (state) => state,
    )
    const [community, setCommunity] = useState<string>('community')
    const [isModalActive, setIsModalActive] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        fetchPlacardList()

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
                    `px-4 py-[47px] w-full ` +
                    `md:max-w-[798px] md:px-10 md:py-[34px] `
                }
            >
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <InputSearch
                            text={searchText}
                            setTextValue={setSearchText}
                        />
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div>
                            <Dropdown
                                menuList={getCommunityEnumValues()}
                                dropdownValue={community}
                                setDropdownValue={setCommunity}
                            />
                        </div>
                        <Button
                            onClick={() => {
                                if (user.id) {
                                    setIsModalActive(true)
                                } else {
                                    router.replace('/login')
                                }
                            }}
                        >
                            Create +
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-[1px] overflow-hidden rounded-xl w-full  bg-grey-100">
                    {placardList &&
                        placardList.map((placard) => (
                            <Card
                                key={placard.id}
                                name={placard.userId.fullName}
                                title={placard.title}
                                avatarImageUrl={placard.userId.profileImageUrl}
                                tag={placard.community}
                                description={placard.description}
                                commentCount={0}
                                searchWord={searchText}
                                slug={placard.id}
                            />
                        ))}
                </div>
            </div>
        </Fragment>
    )
}

export default BlogsProvider
