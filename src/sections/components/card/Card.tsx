import { FC } from 'react'
import Tag from '../tag/Tag'
import Image from 'next/image'
import { capitalize } from 'radash'

interface Props {
    title: string
    name: string
    avatarImageUrl: string
    tag: string
    description: string
    commentCount: number
    type?: 'full' | 'short'
}

const Card: FC<Props> = ({
    name,
    title,
    avatarImageUrl,
    tag,
    commentCount,
    description,
    type = 'short',
}: Props) => {
    const isShortType = type === 'short' ? true : false

    return (
        <div
            className={
                `relative bg-white overflow-hidden px-5 ` +
                `${isShortType ? 'py-[21px]' : 'pt-10 pb-8'}`
            }
        >
            <div className="absolute top-[14px] right-[15px]">
                <Image
                    src="/icons/star-icon.svg"
                    alt="star icon"
                    width={16}
                    height={16}
                />
            </div>

            <div className="flex gap-[10px] items-center mb-[15px]">
                <div
                    className={
                        `aspect-square rounded-full overflow-hidden ` +
                        `${isShortType ? 'w-[31px]' : 'w-[48px] '}`
                    }
                >
                    <Image
                        className="w-full h-full"
                        src={avatarImageUrl}
                        alt="star icon"
                        width={31}
                        height={31}
                    />
                </div>
                <div
                    className={
                        `font-medium text-sm ` +
                        `${isShortType ? 'text-grey-300' : 'text-text'}`
                    }
                >
                    {name}
                </div>
            </div>

            <div className={isShortType ? 'mb-[5px]' : 'mb-4'}>
                <Tag>{capitalize(tag)}</Tag>
            </div>

            <div
                className={
                    `flex flex-col ` +
                    `${isShortType ? 'gap-0 mb-[10px]' : 'gap-4 mb-7'}`
                }
            >
                <div
                    className={
                        `font-semibold ` +
                        `${isShortType ? 'text-base' : 'text-[28px] leading-6'}`
                    }
                >
                    <strong>{title}</strong>
                </div>
                <div className="">
                    <p
                        className={`${type == 'short' ? 'line-clamp-2' : 'line-clamp-none'} text-xs leading-[14px] text-[#101828]`}
                    >
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[5px]">
                <div>
                    <Image
                        src="/icons/message-icon.svg"
                        alt="message icon"
                        width={12}
                        height={12}
                    />
                </div>
                <div className="text-grey-300 font-normal text-xs leading-[14.25px]">
                    {commentCount} Comments
                </div>
            </div>
        </div>
    )
}

export default Card
