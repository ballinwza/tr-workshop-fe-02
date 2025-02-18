'use client'
import { FC, ReactNode, useState } from 'react'

import Modal from './Modal'
import Dropdown from '../dropdown/Dropdown'
import { getCommunityEnumValues } from '@/sections/shared/enums/community.enum'
import { Input, Textarea } from '@headlessui/react'
import Button from '../button/Button'
import Image from 'next/image'

interface Props {
    title: ReactNode
    isActive: boolean
    setIsActive: (val: boolean) => void
}

const CreateModal: FC<Props> = ({ title, isActive, setIsActive }: Props) => {
    const [community, setCommunity] = useState<string>('Choose a community')

    return (
        <Modal isActive={isActive} setIsActive={setIsActive}>
            <div
                className={
                    `flex flex-col gap-[30px] bg-white px-4 py-[30px] rounded-xl  ` +
                    `md:max-w-[685px] md:p-[30px] md:mx-auto`
                }
            >
                <div
                    onClick={() => setIsActive(false)}
                    className="absolute top-[21px] right-[21px] cursor-pointer"
                >
                    <Image
                        src="/icons/cross-icon.svg"
                        alt="cross icon"
                        width={10}
                        height={10}
                    />
                </div>

                <div className="text-[28px] leading-6 font-semibold">
                    {title}
                </div>

                <div className="flex flex-col gap-3.5">
                    <Dropdown
                        menuList={getCommunityEnumValues()}
                        dropdownValue={community}
                        setDropdownValue={setCommunity}
                        type="light"
                    />
                    <Input
                        className="border-grey-100 border px-3.5 py-2.5 rounded-lg"
                        type="text"
                        placeholder="Title"
                    />
                    <Textarea
                        className="border-grey-100 h-[234px] text-top border px-3.5 py-2.5 rounded-lg"
                        placeholder="What's on your mind..."
                    />
                </div>

                <div className="flex justify-end gap-3">
                    <Button theme="light" onClick={() => setIsActive(false)}>
                        Cancel
                    </Button>
                    <Button>Post</Button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateModal
