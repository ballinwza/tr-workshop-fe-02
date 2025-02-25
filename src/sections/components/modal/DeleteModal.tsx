'use client'
import { FC } from 'react'

import Modal from './Modal'
import Button from '../button/Button'

interface Props {
    isActive: boolean
    setIsActive: (val: boolean) => void
}

const DeleteModal: FC<Props> = ({ isActive, setIsActive }: Props) => {
    return (
        <Modal isActive={isActive} setIsActive={setIsActive}>
            <div
                className={
                    `bg-white rounded-xl text-center shadow-lg px-4 py-[30px] ` +
                    `md:max-w-[400px] md:mx-auto`
                }
            >
                <div
                    className={
                        `text-[#101828] font-semibold text-xl mb-2 ` +
                        `md:text-base`
                    }
                >
                    Please confirm if you wish to
                    <br />
                    delete the post
                </div>
                <div className="text-[#475467] text-base font-normal mb-6">
                    Are you sure you want to delete the post? <br />
                    Once deleted, it cannot be recovered.
                </div>

                <div
                    className={
                        `flex flex-col gap-3 ` +
                        `md:flex-row md:justify-between `
                    }
                >
                    <div className={`w-full ` + `md:order-2`}>
                        <Button
                            additionClass="!w-full"
                            mainColor="#F23536"
                            theme="dark"
                            onClick={() => {
                                setIsActive(false)
                            }}
                        >
                            Delete
                        </Button>
                    </div>

                    <div className={`w-full ` + `md:order-1`}>
                        <Button
                            additionClass="!w-full"
                            theme="light"
                            mainColor="#5B5B5B"
                            borderColor="#DADADA"
                            onClick={() => setIsActive(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal
