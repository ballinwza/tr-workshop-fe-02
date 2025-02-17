import { FC } from 'react'
import Tag from '../tag/Tag'
import Image from 'next/image'

interface Props {
    title: string
    name: string
    avatarImageUrl: string
    tag: string
    description: string
    commentCount: number
}

const Card: FC<Props> = ({
    name,
    title,
    avatarImageUrl,
    tag,
    commentCount,
    description,
}: Props) => {
    return (
        <div className="relative bg-white overflow-hidden px-5 py-[21px]">
            <div className="absolute top-[14px] right-[15px]">
                <Image
                    src="/icons/star-icon.svg"
                    alt="star icon"
                    width={16}
                    height={16}
                />
            </div>

            <div className="flex gap-[10px] items-center mb-[15px]">
                <div className="aspect-square w-[31px] rounded-full overflow-hidden">
                    <Image
                        className="w-full h-full"
                        src={avatarImageUrl}
                        alt="star icon"
                        width={31}
                        height={31}
                    />
                </div>
                <div className="text-grey-300 font-medium text-sm">{name}</div>
            </div>

            <div className="mb-[5px]">
                <Tag>{tag}</Tag>
            </div>

            <div className="mb-[10px]">
                <div className="font-semibold text-base">
                    <strong>{title}</strong>
                </div>
                <div className="">
                    <p className="line-clamp-2 text-xs leading-[14px] text-[#101828]">
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
