import { FC, ReactNode } from 'react'
import Tag from '../tag/Tag'
import Image from 'next/image'
import { capitalize, isEmpty } from 'radash'
import Highlighter from 'react-highlight-words'
import Link from 'next/link'

interface Props {
    slug?: string | null
    title: string
    name: string
    avatarImageUrl: string
    tag: string
    description: string
    commentCount: number
    type?: 'full' | 'short'
    extraIcon?: ReactNode
    searchWord?: string
}

const Card: FC<Props> = ({
    slug = null,
    name,
    title,
    avatarImageUrl,
    tag,
    commentCount,
    description,
    type = 'short',
    extraIcon,
    searchWord,
}: Props) => {
    const isShortType = type === 'short' ? true : false

    const renderMainStyle = () => {
        return (
            <div
                className={
                    `relative bg-white overflow-hidden px-5 ` +
                    `${isShortType ? 'py-[21px]' : 'pt-10 pb-8'}`
                }
            >
                <div className="absolute top-[14px] right-[15px]">
                    {extraIcon}
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
                        <Highlighter
                            highlightClassName="bg-golden py-0.5"
                            searchWords={[searchWord ?? '']}
                            autoEscape={false}
                            caseSensitive={false}
                            textToHighlight={title}
                        />
                    </div>
                    <div>
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

    if (isEmpty(slug)) {
        return renderMainStyle()
    }

    return <Link href={`/blogs/${slug}`}>{renderMainStyle()}</Link>
}

export default Card
