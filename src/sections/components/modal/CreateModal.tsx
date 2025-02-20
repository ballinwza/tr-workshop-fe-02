'use client'
import { FC, ReactNode } from 'react'

import Modal from './Modal'

import Image from 'next/image'
import CreateForm from '../form/CreateForm'

interface Props {
    title: ReactNode
    isActive: boolean
    setIsActive: (val: boolean) => void
}

const CreateModal: FC<Props> = ({ title, isActive, setIsActive }: Props) => {
    return (
        <Modal isActive={isActive} setIsActive={setIsActive}>
            <div
                className={
                    `relative flex flex-col gap-[30px] bg-white px-4 py-[30px] rounded-xl  ` +
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

                <CreateForm
                    onSubmit={() => setIsActive(false)}
                    onCancel={() => setIsActive(false)}
                />
            </div>
        </Modal>
    )
}

export default CreateModal
